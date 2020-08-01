const { pool } = require('../../database/connection')

const {
    user,
} = require('../model/userModel')

const random = async(chatId) => {
    const result = await pool.query(user.selectUsersRandom, [chatId])

    var users = []

    for (user of result.rows) {
        users.push("@" + user.username)
    }

    return users
}

module.exports = {
    random,
}