// forEach(array, func)
function forEach<T>(array: Array<T>, f: (element: T, index: number) => void) : void { 
  let i = 0;
  for (let e of array) {
    f(e, i); 
    i++;
  }
}

forEach([2, 5, 9], (e, i) => console.log(`ELEMENTO ${e}, INDEX ${i}`))

let soma = 0;
forEach([2, 5, 9], (e) => soma+= e);
console.log(soma)