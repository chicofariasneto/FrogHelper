const { pool } = require('../../database/connection')

const {
    user,
} = require('../model/userModel')

const leave = async(userId, groupId) => {
    await pool.query(user.delete, [userId, groupId])
}

module.exports = {
    leave
}