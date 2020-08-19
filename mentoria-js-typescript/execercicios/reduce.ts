// reduce(array, func(acc, elemento, index))
function reduce<T, P>(array: Array<T>, f: (acc: P, element: T, index: number) => P, initialAcc: P) : P{
  let i = 0;
  let acc: P = initialAcc;
  for (let e of array) {
    acc = f(acc, e, i); 
    i++;
  }
  return acc
}

const total = reduce([0, 1, 2, 3], (acc, e, i) => {
   return acc + e;
 }, 0)
 console.log(total)

 const testeReduce = reduce([3, 2, 1, 0], (acc, e, i) => {
   return {...acc, [i]: e}
 }, {});
 console.log(testeReduce)