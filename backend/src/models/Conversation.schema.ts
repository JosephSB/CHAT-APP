import conection from "."

const Schema = conection.Schema;

const ConversationSchema = new Schema(
    {
        conversation_id: String,
        users: [String],
        gallery: [{
            file_id: String,
            user_id: String,
            url_photo: String,
            daty_sent: Date
        }],
        messages: [{
            message_id: String,
            user_id: String,
            type_message: Number,
            message: String,
            daty_sent: Date
        }],
        created_at: Date
    },
    { collection: "conversations" }
);

const ConversationModel = conection.model("conversations", ConversationSchema);

export default ConversationModel