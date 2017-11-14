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

    it("Mark 100 as a common year", () => {
        expect(leapYear(100)).toBe(false)
    })

    it("Mark 200 as a common year", () => {
        expect(leapYear(200)).toBe(false)
    })

    it("Mark 300 as a common year", () => {
        expect(leapYear(300)).toBe(false)
    })

    it("Mark 400 as a leap year", () => {
        expect(leapYear(400)).toBe(true)
    })

    it("Mark 800 as a leap year", () => {
        expect(leapYear(800)).toBe(true)
    })

    it("Mark 1200 as a leap year", () => {
        expect(leapYear(1200)).toBe(true)
    })
})