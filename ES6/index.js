// Default Params

// Antes de ES6
function newFunction(name,age,country) {
    var name = name || 'Julián';
    var age = age || 37;
    var country = country || 'Spain';
    console.log(name,age,country);
}

// En ES6

function newFunction2(name='Julián',age=37, country='Spain') {
    console.log(name,age,country);
}

newFunction2();
newFunction2('Pepe',25,'Portugal');

// ----------------------

// Template Literal

let hello = "Hello";
let world = "World";

// Antes
let epcPhrase = hello + '' +  world;

// ES6
let epicPjrase2 = `${hello} ${world}`;
console.log(epicPjrase2);


// Let, const, Multilínea, Spread Operator y Desestructuración

// Multilínea

// Antes
let lorem = "Esse aliqua nostrud sunt esse enim. \n"
+ "Veniam in ipsum in officia minim nulla nostrud anim qui minim occaecat ad nulla labore.";

// ES6
let lorem2 = `Deserunt consectetur ullamco officia exercitation sint et ex laboris anim non eiusmod occaecat sit enim.
Consectetur consequat voluptate aliqua officia magna dolore nostrud quis.`;

console.log(lorem2);


// Desestructuración
let person = {
    name: "Julián",
    age: 37,
    country: 'Spain',
}

// Antes
console.log(person.name);

// ES6
let { name, age, country} = person;

console.log(name,age,country);

// Spread Operator

let team1 = ['Julián', 'Óscar', 'Ricardo'];
let team2 = ['Valeria', 'Yesica','Camila'];

// ES6  ...objeto
let education = ['David', ...team1, ...team2];

// Let
// Variables con scope del bloque

{
    var globalVar = "Global";
}

{
    let globalLet = "Global Let";
}
console.log(globalVar);
console.log(globalLet);

// ES6
{
    var globalVar = "Global";
}
{
    let globalLet = "Global Let";
    console.log(`Soy ${globalVar}`);
}

console.log(globalVar);

// Const Constante, no cambia el valor

const a = 'b';

a = 'a'; //Error

// Objetos mejorada, parámetros con objetos

let name = 'Julián';
let age = 37;

// Antes
obj = { name: name, age: age};

// ES6

obj2 = {name, age}; 
console.log(obj2); // { name: 'Julián', age: 37 }

//  Arrow Functions, o funciones anónimas

const names = [
    {name: 'Julián',age : 37},
    {name: 'Pepe',  age : 32}
]

// Antes
let listOfNames = names.map(function (item) {
    console.log(item.name);
});

// ES6
let listOfNames2 = names.map(item => console.log(item.name));

// Estructura Arrow Function
const listOfNames3 = (name,age, country) => {
    console.log();
}

const listOfNames4 = name => {
    console.log();
}

const square = num => num * num;

// Promises, se utilizan para trabajar el asincronismo. La promesa es que algo va a pasar

// Estructura
const helloPromise = () => {
    // Resolve or reject
    return new Promise((resolve,reject) => {
        if(true){
            resolve('Ok!');
        }
        else {
            reject(':(');
        }
    });
}

helloPromise()
.then(response => console.log(response))
// .then()Se pueden poner más
.catch(error => console.log(error));


// Ejemplo
const MayorEdad = () => {
    // Resolve or reject
    return new Promise((resolve,reject) => {
        var edad = 19;
        if(edad > 18){
            resolve('Mayor');
        }
        else {
            reject('Menor');
        }
    });
}

MayorEdad()
.then(response => console.log(response))
// .then()Se pueden poner más
.catch(error => console.log(error));

// Clases

class Calculator {
    constructor() {
        this.valueA= 0;
        this.valueB = 0;
    }
    sum(a,b) {
        this.valueA = a;
        this.valueB = b;        
        return a + b;
    }
}

const calc = new Calculator();

console.log(calc.sum(2,2));

