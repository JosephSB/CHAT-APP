import { CreateID } from "../../utils/Id.utils";
import ConversationModel from "../../models/Conversation.schema";
import {
    IConversation, IMessages
} from "../../types/Conversation.types";

export const userBelongsToConversation = async (userID: string, conversationID: string) => {
    const resp = await ConversationModel.findOne({
        users: { $all: [userID] },
        conversation_id: conversationID
    }, { conversation_id: 1, users: 1, created_at: 1 });

    if (!resp) return null;
    return resp.conversation_id;
}

export const existConversationBetweenUsers = async (userID: string, anotherUserID: string) => {
    const resp = await ConversationModel.findOne({
        users: { $all: [userID, anotherUserID] },
    }, { conversation_id: 1, users: 1, created_at: 1 });

    if (!resp) return null;
    return resp.conversation_id;
}

export const findMessagesOfConversation = async (conversationID: string, pag: string) => {
    const CalcSkip = 20 * (parseInt(pag)-1);
    const resp = await ConversationModel.aggregate([
        {
            $match: {
                conversation_id: conversationID
            }
        },
        {
            $project: {
                _id: 0, messages: 1,
            }
        },
        {
            $unwind: {
                path: "$messages"
            }
        },
        {
            $lookup: {
                from: "user",
                localField: "messages.user_id",
                foreignField: "user_id",
                pipeline: [
                    { $project: { _id: 0, username: 1, description: 1, url_photo: 1, user_id: 1 } }
                ],
                as: "user"
            }
        },
    ]).sort({"messages.daty_sent": -1}).skip(CalcSkip).limit(20).sort({"messages.daty_sent": 1})
    /*
    const resp = await ConversationModel.findOne({
        conversation_id: conversationID
    }, { messages: 1 });
*/
    if (!resp) return [];
    return resp//[0]?.messages;
}

export const findConversationWithID = async (
    conversationID: string
): Promise<Omit<IConversation, "gallery" | "messages"> | null> => {
    const resp = await ConversationModel.aggregate([
        {
            $match: {
                conversation_id: conversationID
            }
        },
        {
            $project: {
                conversation_id: 1, users: 1, created_at: 1
            }
        },
        {
            $lookup: {
                from: "user",
                localField: "users",
                foreignField: "user_id",
                pipeline: [
                    { $project: { _id: 0, username: 1, description: 1, url_photo: 1, user_id: 1 } }
                ],
                as: "users"
            }
        },
    ])

    if (resp.length === 0) return null
    return resp[0]
    /*
      const resp = await ConversationModel.findOne({
        users: { $in: [userID, anotherUserID] },
      }, {conversation_id: 1, users: 1, created_at: 1});
      if (!resp || resp[0]) return resp;
      return {
        conversation_id: resp.conversation_id || "",
        users: resp.users as string[],
        created_at: resp.created_at as Date,
      };*/

};

export const createConversation = async (
    userID: string,
    anotherUserID: string
) => {
    const ID = CreateID();

    await ConversationModel.create({
        conversation_id: ID,
        users: [userID, anotherUserID],
        gallery: [],
        messages: [],
        created_at: new Date(),
    });

    return ID;
};

export const saveMessage = async (conversationID: string,dataMsg: Omit< IMessages, "message_id">) => {
    await ConversationModel.updateOne({
        conversation_id: conversationID,
    }, {$push: {messages : {
        ...dataMsg,
        message_id: CreateID()
    }}});

    return true;
}
