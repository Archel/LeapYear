module.exports.leapYear = (year) => {
    if (year === 100 || year === 200 || year === 300) {
        return false
    }

    return year % 4 === 0
}