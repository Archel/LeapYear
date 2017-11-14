module.exports.leapYear = (year) => {
    
    return isDivisibleByFour(year) && !isDivisibleByOneHundred(year)

    function isDivisibleByFour(number) {
        return number % 4 === 0
    }

    function isDivisibleByOneHundred(number) {
        return number % 100 === 0
    }
}