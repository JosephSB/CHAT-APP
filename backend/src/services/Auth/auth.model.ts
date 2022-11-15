import UserCredentialModel from "../../models/UserCredential.schema";
import UserModel from "../../models/User.schema";
import { IParamsLogin, IParamsRegister } from "./types/auth.types";
import { CreateID } from "../../utils/Id.utils";
import { ComparePassword, EncryptPassword } from "../../utils/Encript.utils";
import { User } from "../../types/User.types";

export const CreateUser = async (params: IParamsRegister) => {
    const ID = CreateID();
    await UserCredentialModel.create({
        user_id: ID,
        email: params.email,
        password: EncryptPassword(params.password),
        created_at: new Date()
    })

    await UserModel.create({
        user_id: ID,
        username: params.username
    })

    return ID
}

export const getFullDataUser = async (user_id: string): Promise<User> => {
    const resp = await UserModel.findOne({user_id});

    return {
        user_id: resp?.user_id || "",
        url_photo: resp?.url_photo || "",
        description: resp?.description || "",
        username: resp?.username || "",
        contacts: resp?.contacts || [],
        pendings: resp?.pendings || [],
    }
}

export const findUserEmail = async (email: string) => {
    const resp =  await UserCredentialModel.findOne({email})
    return resp || null
}

export const validateUserByCredentials = async (params: IParamsLogin) => {
   const resp =  await UserCredentialModel.findOne({email: params.email})

    if(!ComparePassword(params.password , resp?.password || "")) return {user_id: null, email: null}

   return {
        user_id: resp?.user_id || null,
        email: resp?.email || null,
   }
}