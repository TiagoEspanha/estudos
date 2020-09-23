/*
  Possuimos um array de qualquer coisa que ainda não sabemos o tipo
  Queremos fazer uma função map, que recebe como primeiro argumento, um array, o segundo argumento é uma função callback.
  A função callback recebe como primeiro argumento um elemento, e como segundo argumento o index.
*/

function map<T, P>(array: Array<T>, f: (element: T, index: number) => P) : Array<P> {
  const retorno: Array<P> = [];
  let i = 0;

  for (let e of array) {
    retorno.push(f(e, i)); 
    i++;
  }
  
  return retorno;
} 
const a: number[] = [1, 2, 3];
console.log(map(a, (element: number) => element + 5))

console.log(map(a, (element: number, index: number) => `${element}${index}` ))