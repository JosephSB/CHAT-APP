import conection from "."
import bcrypt from "bcryptjs"

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

UserCredentialSchema.methods.encryptPassword = (password: string) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
UserCredentialSchema.methods.comparePassword = function (password: string) {
    return bcrypt.compareSync(password, this.password);
};

const UserCredentialModel = conection.model("user_credentials", UserCredentialSchema);

export default UserCredentialModel