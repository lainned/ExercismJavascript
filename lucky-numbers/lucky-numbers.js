// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let s1 = String(array1.join(''));
  let s2 = String(array2.join(''));
  return Number(s1) + Number(s2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let num = String(value);
  for(let i = 0; i < num.length / 2; i++){
    if(num[i] != num[num.length - i - 1]){
      return false;
    }
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input){
    return 'Required field';
  }
  if(!Number(input) || input == '0'){
    return 'Must be a number besides 0';
  }
  return '';
}
