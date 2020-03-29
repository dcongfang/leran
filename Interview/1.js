// function terriableEvent(n) {
//   let r,l,c;
//    x = (r-2)* (c-1) * (l-2)
//    x
//    r*c*l
//   return (n+1)*3 * 3 - n
// }
// console.log(terriableEvent(4))
// 在某个仓库中，堆积了很多的货物。每个货物是一个正方体的，边长为1。所有货物恰好堆积成一个长方体，边长为R*C*L。

// 目前，在某次确认货物的时候，管理员意识到这一堆货物被小偷偷走了一些。这个小偷将原来的R*C*L的货物组成的长方体偷成了恰好(R-2)*(C-1)*(L-2)的长方体。

// 但是管理员记不得的R,C,L具体数值了，他只能计算现在的货物总数。他希望算出来最坏情况下被偷了多少的货物，输出这个最坏的值。
function sortArr(arr) {
  let arr1 = [];   //存放奇数的数组
  let arr2 = [];   //存放偶数的数组
  for(let i = 0;i < arr.length;i++){
      if(arr[i] % 2 === 1) {
          arr1.push(arr[i])
      }else{
          arr2.push(arr[i])
       }
  }
  let resultArr = arr1.concat(arr2)
   return resultArr
}
console.log(sortArr([1,2,3,4,5,6]))