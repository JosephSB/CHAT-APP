import { IProfile } from "./Profile.interface"

export interface IDetailChat {
    conversation_id: string
    created_at:string
    users: Pick<IProfile, "description"| "user_id" | "username" | "url_photo" >[]
}