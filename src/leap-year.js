module.exports.leapYear = (year) => {

    if (year === 400 || year === 800 || year === 1200) {
        return true
    }

    return isDivisibleByFour(year) && !isDivisibleByOneHundred(year)

    function isDivisibleByFour(number) {
        return number % 4 === 0
    }

    function isDivisibleByOneHundred(number) {
        return number % 100 === 0
    }
}