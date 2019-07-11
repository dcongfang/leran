export default function (len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let str = ''
  for(let i = 0; i < len; i ++) {
    let pos = Math.floor(Math.random() * $chars.length)
    str += $chars.charAt(pos)
  }
  return str
}
