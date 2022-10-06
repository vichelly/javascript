let pessoa = {
    nome: "Vitor",
    sobrenome: "Felício",
    idade: 19,
    social:{
        face:"vichelly",
        insta:{
            url:'@vichelly',
            seguidores: 1000
        }
    },
    completo: function() {
        return `${this.nome} ${this.sobrenome}`
    }
};

let {nome:pessoanome, sobrenome, idade, social:{insta:{url:instagram, seguidores}}} = pessoa;

console.log(pessoanome, sobrenome, idade, instagram, seguidores)

// ou
let {face} = pessoa.social;
console.log(face)

function pegarnomecompleto(obj){
    return obj.nome+' '+sobrenome;
}
console.log(pegarnomecompleto(pessoa))