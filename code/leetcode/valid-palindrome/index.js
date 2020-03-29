// 'aba'
// function palindrome (str) {
//   if (!str || typeof str != 'string') return false
//   return str.split('').reverse().join('') === str;
// }
// str = 'aba';

// console.log(palindrome(str));

// 大小写
// 空，特殊符号 忽略
// "A man, a plan, a canal: Panama"
var isValidChar = (c) => {  // abc ABC 123
  return /^[\w]$/.test(c);
}
var isPalindrom = (s) => {
  s = s.toLowerCase();
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (!isValidChar(s[left])) {
      left++;
      continue;
    }
    if (!isValidChar(s[right])) {
      right--;
      continue;
    }
    if (s[left] == s[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }
  return right <= left
}
console.log(isPalindrom("A man, a plan, a canal: Panama"));