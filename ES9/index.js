// Operador de reposo, características de un objeto que aún no se ha contruido

const obj = {
    name: 'Óscar',
    age: 37,
    country: 'Spain',
};

let { name, ...all} = obj;
console.log(name, all);

// Propagación, unir objetos

const obj = {
    name: "Julián",
};

const obj1 = {
    ...obj,
    country: "Spain",
};


console.log(obj1);

// Promise.finally

const helloWorld = () => {
    return new Promise ( (resolve,reject) => {
        (true) ? resolve('Hello World!') : reject(new Error('Test Error'));
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error=> console.log(error))
.finally( () => console.log('Finalizó'))

// Regex

const regexdata = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexdata.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);