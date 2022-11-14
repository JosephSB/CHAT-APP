import { ValidateEmail, ValidateLengthObject, ValidatePassword, ValidateUsername } from "../../../utils/Validator.util"

export const ValidateUser = (data: any) => {
    if(!ValidateLengthObject(data, 4)) return false
    if(!data.email || !ValidateEmail(data.email)) return false
    if(!data.username || !ValidateUsername(data.username)) return false
    if(!data.password || !data.confirmPassword || !ValidatePassword(data.password, data.confirmPassword)) return false

    return true
}