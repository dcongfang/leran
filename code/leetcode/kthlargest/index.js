// [1, 4, 2, 6, 9, 10]  2

function findKthLargest (nums, k) {
  if (k < 0 || k > nums.length - 1) return NaN;
  return nums.sort((a, b) => b - a)[k-1];
}

q = [1, 4, 2, 6, 9, 10];
// console.log( q.sort((a, b) => b-a) )
console.log(findKthLargest(q, 2));