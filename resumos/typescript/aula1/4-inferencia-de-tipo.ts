//Type annotation x type inference
//Type annotation: Quando nos definimos o tipo de um valor. 

let tipoAnotado: number = 2;
console.log(typeof tipoAnotado); // number
//tipoAnotado = 'lala';

//Type inference: Quando o compilador tenta definir o valor por ele mesmo, na inicializacao
//de um valor. Em funcoes somente tenta adivinhar o tipo que uma funcao RETORNA.

let tipoInferido = 2;
console.log(typeof tipoInferido); // number
//tipoInferido = 'lala';

//Vi algumas referencias que não devemos usar a anotação do tipo sempre, pois acaba sendo 
//código reduntante, pois o tipo já é definido automáticamente

//Sempre devemos definir o tipo quando o compilador não consegue inferir
//1º caso - Quando uma funcao retornar o tipo ANY

let jsonAny = JSON.parse("{1: 'lala'}")
//jsonAny = 'lala';
let jsonObject: {1: string} = JSON.parse("{1: 'lala'}")
//jsonObject = 'lala';

//2º Quando não iniciamos uma variavel ao declara-la
let variavelDoTipoString;
// variavelDoTipoString = 1;

//3º Quando o tipo nao pode ser inferido corretamente

//4º Quando queremos definir que tipo de argumentos uma função recebe
function subtracao(a: number, b: number): number{
	return a-b;
	//return a.toString();
}

s//ubtracao(2,1);
//subtracao('lala', 'a');


function soma(a, b){
	return a+b;
}

console.log(soma(2,1));
console.log(soma('ala', 'a'));





