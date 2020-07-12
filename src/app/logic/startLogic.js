const { pool } = require('../../database/connection')

const {
    insertGroup,
} = require('../model/groupModel')

const {
    checkGroup,
} = require('./checkLogic')

const start = async(chatId, title) => {
    const check = await checkGroup(chatId)
    if (check)
        return false

    await pool.query(insertGroup, [chatId, title])
    return true
}

module.exports = {
    start,
}