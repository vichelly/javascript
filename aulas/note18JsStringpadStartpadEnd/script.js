let telefone = '534';

// padEnd add coisas no fim
// preenche o restante com o que voce colocar
// string com no mínimo 9 caracteres
// se não tiver substituir com *
console.log(telefone.padEnd(9,'*'));

// padStart add coisas no início
console.log(telefone.padStart(9,'*'));


// aplicação prática
let cartao = '9487289347';
let lastDigits = cartao.slice(-4);
console.log('Seu cartão é: '+lastDigits.padStart(11,'*'))
