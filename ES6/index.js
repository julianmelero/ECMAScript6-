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