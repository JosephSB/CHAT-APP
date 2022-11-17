import { ValidateUsername } from "../../../utils/Validator.util"

export const ValidateParamsProfile = (data: any) => {
    if(!Object.keys(data).includes("username") && !Object.keys(data).includes("description")) return false
    if(data.username) {
        if(!ValidateUsername(data.username)) return false
    }
    if(data.description) {
        if(data.description < 1) return false
    }

    return true
}