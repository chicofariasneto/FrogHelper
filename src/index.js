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
const { pool } = require('./database/connection')

const privateMessage = "🐸!Croak!🐸 I currently do not have support for private chats\n Add me on a group and send /start 🐸!Croak!🐸"

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
    await start(chatId, title)
    bot.sendMessage(chatId, "🐸!Croak!🐸 This group was started\nNow, all members must send /join 🐸!Croak!🐸")
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
    await join(userId, chatId, username)
    bot.sendMessage(chatId, "🐸!Croak!🐸 Congratulations frog puppy!\nYou have been successfully adopted 🐸!Croak!🐸")
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
    bot.sendMessage(chatId, "🐸!Croak!🐸 Okay, it's a shame that you want to leave me 🐸!Croak!🐸")
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

    var message = "🐸!Croak!🐸 Calling all little frogs 🐸!Croak!🐸\n\n"
    message += note + "\n\n"

    for (user of users) {
        message += user + " \n"
    }
    bot.sendMessage(chatId, message)
})

bot.onText(/\/all/, async(message) => {
    // Chat id
    const chatId = message.chat.id

    if (private(chatId)) {
        bot.sendMessage(chatId, privateMessage)
        return
    }

    // Users list
    const users = await all(chatId)

    var message = "🐸!Croak!🐸 Calling all little frogs 🐸!Croak!🐸\n\n"

    for (user of users) {
        message += user + " \n"
    }
    bot.sendMessage(chatId, message)
})