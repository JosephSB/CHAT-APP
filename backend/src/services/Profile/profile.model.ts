import UserModel from "../../models/User.schema";
import { User } from "../../types/User.types";

export const getDataUser = async (user_id: string): Promise<Omit<User, "pendings">> => {
    const resp = await UserModel.findOne({user_id});

    return {
        user_id: resp?.user_id || "",
        url_photo: resp?.url_photo || "",
        description: resp?.description || "",
        username: resp?.username || "",
        contacts: resp?.contacts || [],
        //pendings: resp?.pendings || [],
    }
}

export const updateDataUser = async (user_id: string, data: Partial<User>) => {
    const resp = await UserModel.updateOne({ user_id: user_id },{$set: data})
    return resp || null;
}

export const findUserInContacts = async (myUserID: string, otherUserID: string) => {
    const resp = await UserModel.findOne({user_id: myUserID, contacts: {$all : [otherUserID] , $size: 1 }});

    return resp?.user_id || null;
}