const random = (arr) => {

    for (let i = arr.length - 1; i > 0; i--) {
        const numberRand = Math.floor(Math.random() * 1)
        const aux = arr[i]
        arr[i] = arr[numberRand]
        arr[numberRand] = aux
    }

    return arr
}

module.exports = {
    random,
}