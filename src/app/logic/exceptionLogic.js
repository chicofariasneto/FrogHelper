const private = (chatId) => {
    if (chatId > 0)
        return true
    return false
}

module.exports = {
    private
}