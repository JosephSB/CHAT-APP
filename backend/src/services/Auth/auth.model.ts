import UserCredentialModel from "../../models/UserCredential.schema";
import UserModel from "../../models/User.schema";
import { IParamsRegister } from "./types/auth.types";
import { CreateID } from "../../utils/Id.utils";

export const CreateUser = async (params: IParamsRegister) => {
    const ID = CreateID();
    await UserCredentialModel.create({
        user_id: ID,
        email: params.email,
        password: params.password,
        created_at: new Date()
    })

    await UserModel.create({
        user_id: ID,
        username: params.username
    })

    return ID
}