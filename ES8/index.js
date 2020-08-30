// Objet entries, devuelve los valores de una matriz

const data = {
    frontend: 'Óscar',
    backend: 'Julián',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values, devuelve los valores de un objeto a un arreglo

const data = {
    frontend: 'Óscar',
    backend: 'Julián',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);

// Padding, añade cadenas vacías a un string

const string = "Hello";
// padStart(cuantos caracteres va a tener la cadena, caracteres )
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----'));

// Async Await

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true) ? setTimeout( () => resolve('Hello World'), 3000) : reject( new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();    
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);    
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();