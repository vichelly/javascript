// JSON.parse
// transformar string em JSON
let pessoa = '{"nome":"jeff","idade":2}';
let pessoajson = JSON.parse(pessoa);
console.log(pessoajson)
console.log(pessoajson.nome)

// contrário

// JSON.stringify
// transforma o JSON em string
let string = JSON.stringify({nome:'Jack', idade: 19});
console.log(string);