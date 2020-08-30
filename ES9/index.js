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

