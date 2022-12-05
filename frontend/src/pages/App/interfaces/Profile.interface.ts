export interface IProfile {
    user_id: string
    url_photo: string
    description: string
    username: string
    contacts: IProfile[]
    pendings: IProfile[]
    requested: IProfile[]
}