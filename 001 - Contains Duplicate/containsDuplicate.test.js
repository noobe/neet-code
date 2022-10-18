const containsDuplicate = require('./containsDuplicate.js');

/*
  1. Array with duplicates should give true.
  2. Array without duplicates should give false.
  3. Empty Array should give false.
*/

test('[1,0,3,4] should give false', () => {
  expect(containsDuplicate([1,0,3,4])).toBe(false);
});

test('[1,0,3,4,1] should give true', () => {
  expect(containsDuplicate([1,0,3,4,1])).toBe(true);
});

test('[] should give false', () => {
  expect(containsDuplicate([])).toBe(false);
});
