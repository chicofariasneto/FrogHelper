const { pool } = require('../../database/connection')

const {
    selectUsersGroupRandom
} = require('../model/userModel')

const random = async(chatId) => {
    const result = await pool.query(selectUsersGroupRandom, [chatId])

    var users = []

    for (user of result.rows) {
        users.push("@" + user.username)
    }

    return users
}

module.exports = {
    random,
}