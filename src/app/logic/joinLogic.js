const { pool } = require('../../database/connection')

const {
    insertUser,
    selectUserGroup,
} = require('../model/userModel')

const checkUser = async(groupId, userId) => {
    const result = await pool.query(selectUserGroup, [groupId, userId])
    return result.rowCount > 0
}

const join = async(userId, groupId, username) => {
    const check = await checkUser(userId, groupId)
    if (check)
        return

    await pool.query(insertUser, [userId, groupId, username])
    return
}

module.exports = {
    checkUser,
    join,
}