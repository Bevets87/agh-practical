const { splitInteger, joinInteger, nextGreatestInteger } = require('./index');


describe('AghPractical ExerciseOne', () => {

  it('splitInteger() can take an integer and split into an array of numbers', () => {
    const number = 4321;
    const arrayOfNumbers = splitInteger(number);
    expect(arrayOfNumbers).toEqual([4, 3, 2, 1]);
  });

  it('joinInteger() can take an array of integers and join them into an integer', () => {
    const numbers = [1, 2, 3, 4, 5, 7];
    const number = joinInteger(numbers);
    expect(number).toEqual(123457);
  });

  it('nextGreatestInteger(1234) -> 1243 ', () => {
    const number = 1234;
    const result = nextGreatestInteger(number);
    expect(result).toEqual(1243);
  });

  it('nextGreatestInteger(110) -> false', () => {
    const number = 110;
    const result = nextGreatestInteger(number)
    expect(result).toBeFalsy();
  });

  it('nextGreatestInteger(112) -> 121', () => {
    const number = 112;
    const result = nextGreatestInteger(number);
    expect(result).toEqual(121);
  });

  it('nextGreatestInteger(534976321) -> 536123479', () => {
    const number = 534976321;
    const result = nextGreatestInteger(number);
    expect(result).toEqual(536123479);
  });

  it('nextGreatestInteger(34512) -> 34521', () => {
    const number = 34512;
    const result = nextGreatestInteger(number);
    expect(result).toEqual(34521);
  });




})