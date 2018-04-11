const { evens, odds } = require("./")

describe("Evens function",()=>{
    test("should return empty array when input is empty array",()=>{
        // given
        const input = [];
        const expectedResult = [];
        // When
        const result = evens(input);

        // Then
        expect(result).toEqual(expectedResult);
    });


});

describe("Odds function",()=>{
    test("should return empty array when input is empty array",()=>{
        // given
        const input = [];
        const expectedResult = [];
        // When
        const result = odds(input);

        // Then
        expect(result).toEqual(expectedResult);
    });
});