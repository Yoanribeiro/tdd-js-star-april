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

    test("should return the array with one element if the element is even",()=>{
        // given
        const input = [2];
        const expectedResult = [2];
        // When
        const result = evens(input);

        // Then
        expect(result).toEqual(expectedResult);
    });

    test("should return the array with one element if the first element is odd and the second is even",()=>{
        // given
        const input = [1,2];
        const expectedResult = [2];
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

    test("should return the array with one element if the element is odd",()=>{
        // given
        const input = [1];
        const expectedResult = [1];
        // When
        const result = odds(input);

        // Then
        expect(result).toEqual(expectedResult);
    });

    test("should return the array with one element if the first element is even and the second is odd",()=>{
        // given
        const input = [2,3];
        const expectedResult = [3];
        // When
        const result = odds(input);

        // Then
        expect(result).toEqual(expectedResult);
    });
});