let arr1 = [{id:0, count:1},{id:1, count:7},{id:0, count:6},{id:2, count:1}]
function uniq(arr) {
for (let i = 0; i < arr.length; i++) {
  let map = new Map()
  let result = []
  if (map.has(arr[i])) {
    map.set(arr[i], true)
  }else {
    map.set(arr[i], false)
    result.push(arr[i])
  }
  return result
}
}
console.log(uniq(arr1))