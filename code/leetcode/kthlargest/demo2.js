function findKthLargest (nums, k) {
  const arr = quick_sort(nums);
  return arr[k-1];
}

function quick_sort (arr) {
  if (arr.length <= 1) return arr;
  var left = [],
    right = [],
    baseDon = Math.round(arr.length / 2),
    base = arr.splice(baseDon, 1)[0];
  for (var i = 0; i < arr.length; i++) {  // O(N)
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quick_sort(left).concat([base], quick_sort(right));  //递归 O(log2N)
}