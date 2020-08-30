const hello = () => {
    return 'Hello!';
}

// Node Todavía no soporta default
//  export default hello;

// Con soporte Node
module.exports = hello;