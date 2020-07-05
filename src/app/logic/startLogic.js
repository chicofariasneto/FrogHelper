const { pool } = require('../../database/connection')

const {
    insertGroup,
    selectGroup,
} = require('../model/groupModel')

const checkGroup = async(chatId) => {
    const result = await pool.query(selectGroup, [chatId])
    return result.rowCount > 0
}

const start = async(chatId, title) => {
    const check = await checkGroup(chatId)
    if (check)
        return

    await pool.query(insertGroup, [chatId, title])
    return
}

module.exports = {
    checkGroup,
    start,
}