const { pool } = require('../../database/connection')

const {
    insertUser,
} = require('../model/userModel')

const {
    checkUser,
} = require('./checkLogic')

const join = async(userId, groupId, username) => {
    const check = await checkUser(userId, groupId)
    if (check)
        return false

    await pool.query(insertUser, [userId, groupId, username])
    return true
}

module.exports = {
    join,
}