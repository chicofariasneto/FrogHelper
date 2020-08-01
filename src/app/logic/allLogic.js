const { pool } = require('../../database/connection')

const {
    user
} = require('../model/userModel')

const all = async(groupId) => {
    const result = await pool.query(user.selectUsers, [groupId])

    var users = []

    for (user of result.rows)
        users.push("@" + user.username)

    return users
}

module.exports = {
    all,
}