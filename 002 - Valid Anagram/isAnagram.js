/*
Contains Duplicate
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Cases:
  1. String pairs that are Anagrams should give true  (case insensitive)
  2. String pairs that are not Anagrams should give false (case insensitive)
  3. Empty Strnigs should give true.
*/

const isAnagram = (str1, str2) => {
  if (str1 === '' && str2 === '') {
    return true;
  } else if (str1.length !== str2.length) {
    return false;
  }
  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

module.exports = isAnagram;