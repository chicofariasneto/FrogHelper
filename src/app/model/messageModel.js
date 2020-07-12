const privateMessage = "I currently do not have support for private chats. Add me on a group and send /start"

const startMessage = "This group was started. Now, all members must send /join"

const joinMessage = "Congratulations frog puppy! You have been successfully adopted."

const leaveMessage = "Okay, it's a shame that you want to leave me"

const allMessage = (note, message, users) => {
    var response = "Calling all little frogs 🐸\n\n"

    response += note + "\n\n"

    for (user of users) {
        if ('@' + message.from.username !== user)
            response += user + " \n"
    }

    return response
}

const randomMessage = (users) => {
    var response = "Random order 🐸\n\n"

    for (user of users)
        response += user + "\n"

    return response
}

const userMessage = (user) => {
    var response = "Random user 🐸\n\n"

    response += user

    return response
}

module.exports = {
    privateMessage,
    startMessage,
    joinMessage,
    leaveMessage,
    allMessage,
    randomMessage,
    userMessage,
}