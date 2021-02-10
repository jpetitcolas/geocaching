import stringToDigit from "./stringToDigit";

describe('String to Digit', () => {
    it.each`
        value | expectedDigit
        ${'bac'} | ${6}
        ${'cathedrale'} | ${5}
        ${'foo bar'} | ${3}
    `('should turn "$value" into "$expectedDigit"', ({ value, expectedDigit }) => {
        expect(stringToDigit(value)).toBe(expectedDigit);
    });
})
