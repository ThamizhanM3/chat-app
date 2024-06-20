const Conversation = require("../model/conversation.model")
const Message = require("../model/message.model")

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id: recieverId } = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            })
        }

        const newMessage = await Message.create({
            senderId,
            recieverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
            console.log(conversation);
        }

        await conversation.save();

        res.status(201).json(conversation)

    } catch (error) {
        console.log('Error in message controller', error);
        res.status(500).json({
            error: "Internal server error"
        })
    }
}

const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages")

        res.status(200).json(conversation.messages)

    } catch (error) {
        console.log('Error in Get Messages Controller', error);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

module.exports = { sendMessage, getMessages }