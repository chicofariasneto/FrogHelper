const private = (chatId) => {
    if (chatId > 0)
        return 1
    return 0
}

module.exports = {
    private
}