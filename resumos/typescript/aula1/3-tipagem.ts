/*
Tipagem:
	O que é um tipo: "Forma fácil de referir que propriedades e métodos um valor possuí"
	Não implementa o comportamento
	Todo valor tem um tipo em JS.
*/

let a: string;


//Temos diversos tipos nativos e estes são separados em 2 grandes grupos
//primitive type e object type
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
//const boleana3: boolean = 0;
		
//undefined: 
const naoDefinido1: undefined = undefined
const naoDefinido2: undefined = null

//null:
const nulo1: null = null;
const nulo2: null = undefined;

//void: Tipo vazio haha. Normalmente usado quando uma função não retorna nada.
const vazio1: void = undefined;
const vazio2: void = null;
const logger: () => void = () => {console.log("Logado hehe")}

//never: Usado pra definir quando uma funcao nunca via chegar ao seu fim, por exemplo
//quando joga erro
const funcaoQueNaoAcaba = (): never => {throw new Error('ERRO sinistro');}


//Tipos de objetos(object type):

// objects:
//Realmente não posso colocar a mais?
let fusca: {nome: string, ano: number};
// fusca = {nome: 'fusca'};


// functions:	
let getName : (name: string) => string;
//getName = (name) => { return name; }
//console.log(getName("Diegão"));
//getName = (lala) => { return lala; }
//console.log(getName("Brenin"));
function sextar(alguem: string): void {
	console.log(`${alguem} fugindo do gartic`)
}
sextar("Matheus");
	

// arrays:
	let arrayNumeros: Array<number>;

	let arrayString: string[];
	//arrayString = [1,2,3];
	//arrayString = ['a','b','c'];
		
//classes:
		

/*
Temos essa separação pois podemos 'enganar' o compilador do typescript para achar que um
valor que tenha um OBJECT TYPE para achar que tem outro tipo. Não podemos fazer isso 
		com tipos primitivos. 
*/

