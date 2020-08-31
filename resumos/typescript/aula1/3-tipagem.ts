/*
Tipagem:
	O que é um tipo: "Forma fácil de referir que propriedades e métodos um valor possuí"
	Não implementa o comportamento
	Todo valor tem um tipo em JS.
*/


//Temos diversos tipos nativos e estes são separados em 2 grandes grupos
//primitive type e object type
//Tipos primitivos(primitive type):
		
//string: representam texto
const texto1: string = 'O fuXico';
const texto2: string = "Segunda-feira ;(";
const texto3: string = "";	
const textoNull: string = null; // strictNullChecks
		
//number: Qualquer número puro é um number em typescript. Não temos, por padrão, as separações
// em INT, FLOAT, BIGINTEGER etc... como em outras linguagens
const numero1: number = 1;
const numero2: number = 0.25;
const numero3: number = -1;

		
//boolean: 
const boleana1: boolean = true;
const boleana2: boolean = false;
const boleana3: boolean = 1;
		
//undefined: 
const naoDefinido1: undefined = undefined
const naoDefinido2: undefined = null

//null:
const nulo1: null = null;
const nulo2: null = undefined;

//void: Normalmente usado quando uma função não retorna nada.
const vazio1: void = undefined;
const vazio2: void = null;
const logger: () => void = () => {console.log("Logado hehe")}

//never: Usado pra definir quando uma funcao nunca via chegar ao seu fim, por exemplo
//quando joga erro
const funcaoQueNaoAcaba = (): never => {throw new Error('ERRO sinistro');}


//Tipos de objetos(object type):

// objects:
let fusca: {nome: string, ano: number};
fusca = {nome: 'fusca', ano: 1900};

type Cargo = {salario: number, nome: string }
let programador: Cargo = {salario: 1000}

// functions:	
let getName : (name: string) => string;
getName = (name) => { return name; }
console.log(getName("Diegão"));

getName = (lala) => { return lala; }
console.log(getName("Brenin"));

function sextar({alguem}:{alguem: string} ): void {
	console.log(`${alguem} fugindo do gartic`)
}
sextar({alguem: "Matheus"});
	

// arrays:
let arrayNumeros: Array<number>;

let arrayString: string[];
//arrayString = [1,2,3];
//arrayString = ['a','b','c'];
let arrayImutavel: ReadonlyArray<number>;
arrayImutavel = [1,2,3];
arrayImutavel = [1,2,3,4];
		
//classes:
 class Veiculo{
	private _marca: string;

	constructor(){
		this._marca = 'BMW';
	}
	
	metodoPublico(){
		console.log("Acessivel em qualquer lugar")
	}

	private metodoPrivado(){
		console.log("Acessivel em metodos de Carro")
	}

	protected metodoProtected(){
		console.log("Acessível em metodos de Carro e classes que extendem Carro")
	}

	get marca(): string{
		return this._marca;
	}

	set marca(newMarca: string){
		this._marca = newMarca;
	}
	
 }
 
 class Carro extends Veiculo{
	buzina(){
		this.metodoPublico();
		this.metodoPrivado();
		this.metodoProtected();
	}
 }

// Podemos criar tipos\interfaces proprios
interface CarroBMW {nome: string, ano: number}
//type Carro {nome: string, ano: number}
let ferrari: CarroBMW; 
		



