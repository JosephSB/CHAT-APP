import { IProfile } from "./Profile.interface"

export interface IDetailChat {
    conversation_id: string
    created_at:string
    users: Pick<IProfile, "description"| "user_id" | "username" | "url_photo" >[]
}

export interface IMessage {
    conversationID: string
    user_id: string
    message: string
    time: Date
}

export interface IMessageWithOrientation extends IMessage {
    orientation: "rigth" | "left"
}