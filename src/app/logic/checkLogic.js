const { pool } = require('../../database/connection')

const {
    selectGroup
} = require('../model/groupModel')

const {
    selectUserGroup
} = require("../model/userModel")

const checkGroup = async(chatId) => {
    const result = await pool.query(selectGroup, [chatId])
    return result.rowCount > 0
}

const checkUser = async(groupId, userId) => {
    const result = await pool.query(selectUserGroup, [groupId, userId])
    return result.rowCount > 0
}

module.exports = {
    checkGroup,
    checkUser,
}