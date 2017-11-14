const { leapYear } = require('../src/leap-year');

describe("Leap Year should", () => {
    it("return true if it is a leap year", () => {
        expect(leapYear(4)).toBe(true)
    })
})