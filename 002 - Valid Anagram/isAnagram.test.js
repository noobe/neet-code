const isAnagram = require('./isAnagram');

/*
  1. String pairs that are Anagrams should give true  (case insensitive)
  2. String pairs that are not Anagrams should give false (case insensitive)
  3. Empty Strnigs should give true.
*/

test('abcf and afcb are Anagrams (true)', () => {
  expect(isAnagram('aBcf','afCb')).toBe(true);
});

test('abcf and afcd are not Anagrams (false)', () => {
  expect(isAnagram('abcf','afcd')).toBe(false)
});

test('"" and "" are Anagrams (true)', () => {
  expect(isAnagram('','')).toBe(true)
});