// function Person(name) {
//   this.name = name
//   return 878
// }
// let p = new Person('dc')
// console.log(p)


// --------------构造函数本身是不需要返回值的,如果return的是非对象,会忽略返回值,如果是对象,这返回该对象(return null 也会忽略)
// Array.prototype.method = function() {
//   console.log('dc')
// }
// var myArr = [1,2,3,4,5,6,7,]
// for (let index of myArr) {
//   console.log(myArr[index])
// }

// for in
//1. index 是索引为字符串型数字,不能进行集合运算
//2. 遍历的顺序有可能不是按照实际数组的内部顺序
//3. 使用 for in 会遍历数组所有的可枚举属性,包括原型
// for in  更适合遍历对象

// for of
// for in 遍历的是数组的索引(键名),而for of 遍历的是数组的元素
// for of 遍历的只是数组的元素,而不包括数组的原型属性和索引


// let arr2 = [1,2,3,4,5,6,7,3,2,8]
// function outputArr(arr) {
//   var res = []
//   for (var i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])){
//       res = res.concat(outputArr(arr[i]))
//     }else{
//       res.push(arr[i])
//     }
//   }
//   return res
// }
let arr1 = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]
function outputArr(arr){
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item): item)
  }, [])
}
console.log(outputArr(arr1))