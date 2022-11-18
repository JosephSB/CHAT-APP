import conection from "."

const Schema = conection.Schema;

const UserSchema = new Schema(
    {
        user_id: String,
        url_photo: String,
        description: String,
        username: String,
        contacts: [String],
        pendings: [String],
        requested: [String],
    },
    { collection: "user" }
);

const UserModel = conection.model("user", UserSchema);

export default UserModel