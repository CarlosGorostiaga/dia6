let suma = (op1 = 0, op2 = 0, op3 = 0 ) => (`${op1} + ${op2} + ${op3} = ${op1 + op2 + op3}`);
let resta = (op1 = 0, op2 = 0) => (`${op1} - ${op2} = ${op1 - op2}`);
let multiplicacion = (op1 = 0, op2 = 0) => (`${op1} * ${op2} = ${op1 * op2}`);
let division = (op1 = 0, op2 = 0) => (`${op1} / ${op2} = ${op1 / op2}`);
let cuadrado = (op1 = 0,) => (op1 * op1)
module.exports = { suma, resta, multiplicacion, division, cuadrado }

console.log(suma(8,10,14));