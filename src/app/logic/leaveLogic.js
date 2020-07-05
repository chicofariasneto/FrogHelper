const { pool } = require('../../database/connection')

const {
    deleteUser
} = require('../model/userModel')

const leave = async(userId, groupId) => {
    await pool.query(deleteUser, [userId, groupId])
}

module.exports = {
    leave
}