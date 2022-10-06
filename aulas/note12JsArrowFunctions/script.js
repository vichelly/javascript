/*let somar = function(x,y) {
    return x+y;
}*/

//arrow =>
let somar = (x,y) => {
    return x+y;
}
console.log(somar(13,7))

// outra maneira
let mult = (x,y) => x*y;
console.log(mult(8,7))

// letras no nome
let letras = (nome) => nome.length;
console.log(letras('vichelly'))