const arr1 = [{id:0,title: 'asfsdk'},{id:1,title: 'irthhrkeg'}, {id:1,title: 'irthhrkeg'}]
let newArr = []
for(let i = 0; i<arr1.length;i++) {
  let item = arr1[i].title
  newArr.push(item)
}
getWordCnt = (newArr) => {
  var obj = {};
  for (var i = 0, l = newArr.length; i < l; i++) {
    var item = newArr[i];
    obj[item] = (obj[item] + 1) || 1;
  }
  return obj;
}
console.log(getWordCnt(newArr));//{apple: 2, orange: 3, pear: 1}

