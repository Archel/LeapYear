module.exports.leapYear = (year) => {
    return isDivisibleByFour(year) 
            && (!isDivisibleByOneHundred(year) || (isDivisibleByOneHundred(year) && isDivisibleByFourHundred(year)))

    function isDivisibleByFour(number) {
        return number % 4 === 0
    }

    function isDivisibleByOneHundred(number) {
        return number % 100 === 0
    }

    function isDivisibleByFourHundred(number) {
        return number % 400 === 0
    }
}