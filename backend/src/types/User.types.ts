interface BaseUser {
    user_id: string
}

export interface UserCredentials extends BaseUser {
    email: string
    password: string
    created_at: Date
}

export interface User extends BaseUser{
    url_photo: string
    description: string
    username: string
    contacts: string[]
    pendings: string[]
    requested: string[]
}