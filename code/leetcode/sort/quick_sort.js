// 快排
// 抽象  a b c  一次
// [8, 2, 5, 9, 7]
// 递归
function quickSort (arr) {
  if (arr.length <= 1) {return arr}
  var left = [],
    right = [],
    baseDon = Math.round(arr.length / 2),
    base = arr.splice(baseDon, 1)[0];
  // 找到中间值，
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // left a
  // base 中间值
  // right b
  return quickSort(left).concat([base], quickSort(right));
}

console.log(quickSort([9,5,8,2,8,4,6,5,8,1,2,3,5,7,3,8,4,2,5]));

// [9,8,7,6,5,4,3,2,1]
// [4,3,2,1] [5] [9,8,7,6]
// [1] [2] [4,3]  [5]  [6] [7] [9,8] 

// [5,8,7,6,1,4,3,2,9]
// [] [1] [5,8,7,6,4,3,2,9]
// [] [1]  [3,2] [4] [5,8,7,6,9]
// [] [1]  [2] [3]  [4]  [5, 6] [7] [9, 8] 

