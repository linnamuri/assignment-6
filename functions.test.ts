const {shuffleArray} = require('./utils')
let array=[1,2,3,4,5,6]

describe('shuffleArray should', () => {
    test('have length',() => {
        console.log("Running ShuffleArray Test: Original Array Length::"+array.length)
        expect(shuffleArray(array).length).toBe(array.length);
     });
     test('To check it the array elements matches ',() => {
        expect(shuffleArray(array)).toEqual(expect.arrayContaining(array));
     });
});

//write atleast 2 tests
//check that it returns an array of the same length as the argument sent in





  