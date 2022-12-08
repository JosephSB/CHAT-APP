export interface IGallery {
    file_id: string
    user_id: string
    url_photo: string
    daty_sent: Date
}

export interface IMessages {
    message_id: string
    user_id: string
    type_message: 0 | 1 // 0 sms, 1 img
    message: string
    daty_sent: Date
}

export interface IConversation {
    conversation_id: string
    users: string[],
    gallery: IGallery[]
    messages: IMessages[]
    created_at: Date
}