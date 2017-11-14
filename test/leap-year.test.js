const { leapYear } = require('../src/leap-year');

describe("Leap Year should", () => {
    it("Mark year 4 as a leap year", () => {
        expect(leapYear(4)).toBe(true)
    })

    it("Mark year 1 as a common year", () => {
        expect(leapYear(1)).toBe(false)
    })

    it("Mark 5 as a common year", () => {
        expect(leapYear(5)).toBe(false)
    })

    it("Mark 6 as a common year", () => {
        expect(leapYear(6)).toBe(false)
    })
})