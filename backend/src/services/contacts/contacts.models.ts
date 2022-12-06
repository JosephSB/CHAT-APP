import UserModel from "../../models/User.schema"

export const getListsOfUser = async (user_id: string) => {

    const resp = await UserModel.aggregate([
        {
            $match: {
                "user_id" : user_id
            }
        }, 
        {
            $project: {
                _id:0 ,contacts: 1, pendings: 1, requested: 1
            }
        }, 
        {
            $lookup: {
                from : "user",
                localField : "contacts",
                foreignField : "user_id",
                as : "contacts"
            }
        },
        {
            $lookup: {
                from : "user",
                localField : "pendings",
                foreignField : "user_id",
                as : "pendings"
            }
        },
        {
            $lookup: {
                from : "user",
                localField : "requested",
                foreignField : "user_id",
                as : "requested"
            }
        }
    ])


/*
    const resp = await UserModel.findOne({
        user_id: user_id
    },{contacts: 1, pendings: 1, requested: 1})
*/
    return resp
}

export const addRequestToList = async (MyUserID: string, OtherUserID: string) => {
    await UserModel.updateOne({user_id: MyUserID},{$push: {requested : OtherUserID}})
    await UserModel.updateOne({user_id: OtherUserID},{$push: {pendings : MyUserID}})
    return true
}

export const acceptPending = async (MyUserID: string, OtherUserID: string) => {

    //move pending to contacts
    const user1 = await UserModel.findOne({user_id: MyUserID});
    const i1 = user1?.pendings.findIndex( (item) => item ===  OtherUserID);
    if(i1 !== undefined && i1 >= 0) user1?.pendings.splice(i1, 1)
    user1?.contacts.push(OtherUserID)
    await user1?.save();
    //move requested to contacts
    const user2 = await UserModel.findOne({user_id: OtherUserID});
    const i2 = user2?.requested.findIndex( (item) => item ===  MyUserID);
    if(i2 !== undefined && i2 >= 0) user2?.requested.splice(i2, 1)
    user2?.contacts.push(MyUserID)
    await user2?.save();

    return true
}

export const removeContact = async (MyUserID: string, OtherUserID: string) => {
    const user1 = await UserModel.findOne({user_id: MyUserID});
    const i1 = user1?.contacts.findIndex( (item) => item ===  OtherUserID);
    if(i1 !== undefined && i1 >= 0) user1?.contacts.splice(i1, 1)
    await user1?.save();
    
    const user2 = await UserModel.findOne({user_id: OtherUserID});
    const i2 = user2?.contacts.findIndex( (item) => item ===  MyUserID);
    if(i2 !== undefined && i2 >= 0) user2?.contacts.splice(i2, 1)
    await user2?.save();
    return true
}

export const existInList = async (MyUserID: string, OtherUserID: string, list: "requested" | "pendings" | "contacts" ) => {
    const user = await UserModel.findOne({user_id: MyUserID});
    if(!user) return false
    const find = user[list].findIndex( (item) => item === OtherUserID  )
    if(find === -1) return false
    //const resp = await UserModel.findOne({user_id: MyUserID, [list]: {$all : [OtherUserID] , $size: 1 }});

    return true;
}

export const findUser = async (q: string) => {
    const resp = await UserModel.find({username: {$regex: `.*${q}.*`}}, {user_id: 1, username: 1, url_photo: 1, description: 1});

    return resp || []
}

export const getStatusContact = async (myID: string, otherID: string) => {
    const resp = await UserModel.findOne({user_id: myID}, {contacts: 1, pendings: 1, requested: 1});

    if(!resp) return 0 // no son amigos

    const ra = resp.contacts.find( (id) => id === otherID );
    if(ra) return 1 //  son amigos

    const rb = resp.pendings.find( (id) => id === otherID );
    if(rb) return 2 //  pendiente

    const rc = resp.requested.find( (id) => id === otherID );
    if(rc) return 3 //  solicitado

    return 0 
}