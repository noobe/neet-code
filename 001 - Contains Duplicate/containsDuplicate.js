/*
Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Cases:
  1. Array with duplicates should give true.
  2. Array without duplicates should give false.
  3. Empty Array should give false.
*/

const containsDuplicate = arr => {
  const obj = {};
  for (let i =0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return true;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return false;
};

module.exports = containsDuplicate;

/*
The order of complexity is O(n) as for the worst case it needs to itearte the full Array to return the result
*/