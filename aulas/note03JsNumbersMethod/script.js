// passar para string
let num = 10;
let palavra = num.toString();

// até qual decimal mostrar
let n = 10.834784
let decimal = n.toFixed(2);
console.log('número: ',n)
console.log('toFixed: ', decimal)

// passar para inteiro ou float
let strnum = '44'
let intnum = parseInt(strnum) + 3
let floatnum =parseFloat(strnum) + 3.45
console.log(intnum)
console.log(floatnum)