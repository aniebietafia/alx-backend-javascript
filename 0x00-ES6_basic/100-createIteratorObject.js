// export default function createIteratorObject(report) {
//   let iterable = [];

//   if (!report.allEmployees || typeof report.allEmployees !== 'object') {
//     return iterable;
//   }

//   iterable = {
//     * [Symbol.iterator]() {
//       for (const value of Object.values(report.allEmployees)) {
//         for (const i of value) {
//           yield i;
//         }
//       }
//     },
//   };

//   return iterable;
// }

export default function createIteratorObject(report) {
  const result = [];
  for (const list of Object.values(report.allEmployees)) {
    result.push(...list);
  }
  return result;
}
