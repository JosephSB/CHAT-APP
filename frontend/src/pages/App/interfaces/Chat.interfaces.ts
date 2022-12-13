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

export interface IPreviusMessage {
    messages: {
        message_id: string
        user_id: string
        //type_message: 0,
        message: string,
        daty_sent: Date,
    },
    user: Pick<IProfile, "description"| "user_id" | "username" | "url_photo" >[]
}

export interface IConversation {
    conversation_id: string,
    users: Pick<IProfile, "description"| "user_id" | "username" | "url_photo" >[]
    created_at: Date
}
