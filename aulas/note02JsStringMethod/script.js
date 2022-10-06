let nome = "Vitor Lucas Fujita Felício"
console.log('Nome: '+nome)

// qnt de caracteres
let caracteres = nome.length;
console.log('O nome possue contando com os espaços: '+caracteres);

//procura a posição em que se encontra
let find = nome.indexOf('Fujita')
console.log('Fujita esta na posição: '+find)

// recorta da função a partir de certa posição
// numeros negativos contam do final
let recorte = nome.slice(2, 12);
let recorta = nome.slice(12)
console.log(recorte)
console.log(recorta)

// substituir strings
let substituto =  nome.replace('Fujita', 'Maneiro')
console.log(substituto)

// transformar em maiuscula
let upper = nome.toUpperCase();
console.log(upper)

// tira os espaços vazios do começo e fim das strings
let outronome = '      Vitor       '
let tira = outronome.trim()
let tiraconta = outronome.trim().length;
console.log(tira)
console.log(tiraconta)

// retorna o caractere de determinada posição
let letra = nome[6];
console.log('o caractere da posição 6:', letra)

// transforma string em array
let array = nome.split(' ');
console.log(array);