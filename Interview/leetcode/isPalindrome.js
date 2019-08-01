var isPalindrome = function(s) {
  return s.split('').reverse().join('') === s;
}

console.log(isPalindrome('abaa'))
// const shape = {
//   radius: 10,
//   diameter: function() {
//     return this.radius * 2
//   }
// }
// console.log(shape.diameter())