function findLargestElement(arr) {
  return Math.max(...arr);
}

function findSmallestElement(arr) {
  return Math.min(...arr);
}

function sumArrayElements(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function reverseArray(arr) {
  return arr.reverse();
}

function removeArrayDuplicates(arr) {
  return [...new Set(arr)];
}