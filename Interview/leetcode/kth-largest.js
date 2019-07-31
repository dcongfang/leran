// 无序数组中  找出第k大的数字

// 排序 [k]
// [1, 4, 9, 2, 6, 10]
var findKthLargest = function(arr, k) {
  return arr.sort((a, b) => b - a)[k-1]
}
console.log(findKthLargest([1, 4, 9, 2, 6, 10], 5))
console.log([1, 4, 9, 2, 6, 10].sort((a, b) => b -a))