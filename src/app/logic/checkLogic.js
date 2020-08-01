const { pool } = require('../../database/connection')

const {
    group
} = require('../model/groupModel')

const {
    user
} = require("../model/userModel")

const checkGroup = async(chatId) => {
    const result = await pool.query(group.selectGroup, [chatId])
    return result.rowCount > 0
}

const checkUser = async(groupId, userId) => {
    const result = await pool.query(user.selectUser, [groupId, userId])
    return result.rowCount > 0
}

module.exports = {
    checkGroup,
    checkUser,
}