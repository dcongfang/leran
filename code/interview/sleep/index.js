// 1000ms
// sleep(3000);
// console.log('Hello world');
// 实现一个功能 + 发散理解

// const sleep = time => {
//   return new Promise((resolve, reject) => 
//     setTimeout(resolve, time))
// }
// sleep(3000)
//   .then(() => {
//     console.log('来了兄得');
//   })

// function *sleepGenerator (time) {
//   yield new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
//   console.log(111);
// }
// // sleepGenerator(3000)
// //   .next()
// //   .value
// //   .then(() => {
// //     console.log('一千年以后');
// //   })
// console.log(sleepGenerator().next().value.then(() => {
//   console.log(222);
// }));

// function sleep (time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }
// async function output () {
//   let out = await sleep(3000);
//   console.log(1);
//   return out;
// }
// output();

function sleep (callback, time) {
  if (typeof callback === 'function')
  setTimeout(callback, time)
}
sleep(function () {
  console.log('111')
}, 3000)