require('dotenv').config()
const telegram = require('node-telegram-bot-api')

const token = process.env.TOKEN

const bot = new telegram(token, {
    polling: true,
})

const {
    private
} = require('./app/logic/exceptionLogic')

const {
    start
} = require('./app/logic/startLogic')

const {
    join
} = require('./app/logic/joinLogic')

const {
    leave
} = require('./app/logic/leaveLogic')

const {
    all
} = require('./app/logic/allLogic')

const {
    random
} = require('./app/logic/randomLogic')

const {
    privateMessage,
    startMessage,
    joinMessage,
    leaveMessage,
    allMessage,
    randomMessage,
    userMessage,
} = require('./app/model/messageModel')

const { pool } = require('./database/connection')

bot.onText(/\/start/, async(message) => {
    // Chat id
    const chatId = message.chat.id

    if (private(chatId)) {
        bot.sendMessage(chatId, privateMessage)
        return
    }

    // Group Title
    const title = message.chat.title

    // Start Group
    const started = await start(chatId, title)
    if (started)
        bot.sendMessage(chatId, startMessage)
})

bot.onText(/\/join/, async(message) => {
    // Chat id
    const chatId = message.chat.id

    if (private(chatId)) {
        bot.sendMessage(chatId, privateMessage)
        return
    }

    // User id
    const userId = message.from.id

    // Username of the author of the message
    const username = message.from.username

    // Add user
    const joined = await join(userId, chatId, username)
    if (joined)
        bot.sendMessage(chatId, joinMessage)
})

bot.onText(/\/leave/, async(message) => {
    // Chat id
    const chatId = message.chat.id

    if (private(chatId)) {
        bot.sendMessage(chatId, privateMessage)
        return
    }

    // User id
    const userId = message.from.id

    // Leave user
    await leave(userId, chatId)
    bot.sendMessage(chatId, leaveMessage)
})

bot.onText(/\/all (.+)/, async(message, match) => {
    // Chat id
    const chatId = message.chat.id

    if (private(chatId)) {
        bot.sendMessage(chatId, privateMessage)
        return
    }

    // Users list
    const users = await all(chatId)

    // User Message
    const note = match[1]

    bot.sendMessage(chatId, allMessage(note, message, users))
})

bot.onText(/\/random/, async(message) => {
    // Chat id
    const chatId = message.chat.id

    if (private(chatId)) {
        bot.sendMessage(chatId, privateMessage)
        return
    }

    // Random order
    const usersRandom = await random(chatId)

    bot.sendMessage(chatId, randomMessage(usersRandom))
})

bot.onText(/\/user/, async(message) => {
    // Char id
    const chatId = message.chat.id

    if (private(chatId)) {
        bot.sendMessage(chatId, privateMessage)
        return
    }

    // Users list
    var users = await all(chatId)
    var random = Math.floor(Math.random() * users.length)

    bot.sendMessage(chatId, userMessage(users[random]))
})