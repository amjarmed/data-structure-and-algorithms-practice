/**
 * Finds if there are any duplicates in the given array of numbers.
 *
 * Sorts the array, then checks for any adjacent elements that are equal.
 *
 * Time complexity: O(nlog(n)) due to sorting.
 *
 * @param {number[]} arr The array of numbers to check for duplicates.
 * @returns {boolean} true if there are duplicates, false otherwise.
 */
//
export function findDuplicates(arr: number[]): boolean {
  arr.sort();
  let duplicate = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      duplicate = true;
      break;
    }
  }

  return duplicate;
}
