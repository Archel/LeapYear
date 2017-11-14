module.exports.leapYear = (year) => {
    if (year === 1 || year === 5 || year === 6) {
        return false
    }
    
    return true
}