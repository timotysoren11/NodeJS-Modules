// Creating Module - function

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a,b) => a * b;

// We need to export them - make them public for use
module.exports ={
  add, sub, mult
}