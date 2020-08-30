/*
Tipagem:
	O que é um tipo: "Forma fácil de referir que propriedades e métodos um valor possuí"
	Todo valor tem um tipo em JS.
*/

const a = 'teste';
const substring = a.substr(0,2)
console.log(substring);
//Rodar


//Temos diversos tipos nativos e estes são separados em 2 grandes grupos
//Tipos primitivos(primitive type):
		
//string: representam texto
const texto1: string = 'O fuXico';
const texto2: string = "Segunda-feira ;(";
const texto3: string = "";
		
//number: Qualquer número puro é um number em typescript. Não temos, por padrão, as separações
// em INT, FLOAT, BIGINTEGER etc... como em outras linguagens
const numero1: number = 1;
const numero2: number = 0.25;
const numero3: number = -1;
		
//boolean: 
const boleana1: boolean = true;
const boleana2: boolean = false;
		
//undefined: 
const naoDefinido1: undefined = undefined
const naoDefinido2: undefined = null

//null:
const nulo1: null = null;
const nulo2: null = undefined;

//void: Tipo vazio haha. Normalmente usado quando uma função não retorna nada.
const vazio1: void = null;
const vazio2: void = undefined;
const vazio3: void;
const logger: () => void = () => {console.log("Logado hehe")}

//never: Usado pra definir quando uma funcao nunca via chegar ao seu fim, por exemplo
//quando joga erro
const funcaoQueNaoAcaba : () => never = () => {throw new Error('ERRO sinistro');}


//Tipos de objetos(object type):

		functions:

		arrays:

		classes:

		objects:

	Temos essa separação pois podemos 'enganar' o compilador do typescript para achar que um
		valor que tenha um OBJECT TYPE para achar que tem outro tipo. Não podemos fazer isso 
		com tipos primitivos. 
*/

