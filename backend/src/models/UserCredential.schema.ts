import conection from "."

const Schema = conection.Schema;

const UserCredentialSchema = new Schema(
    {
        user_id: String,
        email: String,
        password: String,
        created_at: Date
    },
    { collection: "user_credentials" }
);

const UserCredentialModel = conection.model("user_credentials", UserCredentialSchema);

export default UserCredentialModel