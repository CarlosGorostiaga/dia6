let suma = (op1 = 0, op2 = 0,) => (`${op1} + ${op2} + = ${op1 + op2}`);
let resta = (op1 = 0, op2 = 0) => (`${op1} - ${op2} = ${op1 - op2}`);
let multiplicacion = (op1 = 0, op2 = 0) => (`${op1} * ${op2} = ${op1 * op2}`);
let division = (op1 = 0, op2 = 0) => (`${op1} / ${op2} = ${op1 / op2}`);
let cuadrado = (op1 = 0,) => (op1 * op1)
module.exports = { suma, resta, multiplicacion, division, cuadrado }

console.log(cuadrado(8));