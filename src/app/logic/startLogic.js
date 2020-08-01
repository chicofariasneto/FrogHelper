const { pool } = require('../../database/connection')

const {
    group,
} = require('../model/groupModel')

const {
    checkGroup,
} = require('./checkLogic')

const start = async(chatId, title) => {
    const check = await checkGroup(chatId)
    if (check)
        return false

    await pool.query(group.insert, [chatId, title])
    return true
}

module.exports = {
    start,
}