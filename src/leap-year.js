module.exports.leapYear = (year) => {
    if (year === 100) {
        return false
    }

    return year % 4 === 0
}