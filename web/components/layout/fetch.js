export default async () => {
  window.__VUE_SRORE__ = store
  console.log(33333)
  return {
  }
}

// 全局处理低浏览器没有Promise.allSettled的方法
// if (!Promise.allSettled) {
//   // @ts-ignore
//   Promise.allSettled = function (promises: any[]) {
//     return new Promise(resolve => {
//       const data: any[] = [], len = promises.length
//       let count = len
//       for (let i = 0; i < len; i += 1) {
//         const promise = promises[i];
//         promise.then((res: any) => {
//           data[i] = { status: 'fulfilled', value: res }
//         }, (error: any) => {
//           data[i] = { status: 'rejected', reason: error }
//         }).finally(() => {
//           if (!--count) {
//             resolve(data)
//           }
//         })
//       }
//     })
//   }
// }

