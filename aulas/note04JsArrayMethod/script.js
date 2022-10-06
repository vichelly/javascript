let list = ['cachorro','ovo','farinha','corante','massa','macaco'];


// transforma em string e coloca virgula para separar os itens
let a = list.toString();
console.log(a);


// transforma em string porém usa um item divisor para separar
let b = list.join('-|-');
console.log(b);


// retorna a posição do item chamado
// se não achar ele retorna -1
let c = list.indexOf('corante');
console.log(c);


// remove o último item do array
list.pop();
console.log(list);
// remove o primeiro item do array
list.shift();
console.log(list);


// muito utilizado push
// serve para adicionar itens numa lista 
list.push('fermento');
console.log(list);


// substituir item da lista
list[0] = 'ovos';
console.log(list[0]);
// se selecionar um item que não existe ele vai adicionar
list[5] = 'banana';
console.log(list);


// remover um item do array = splice(a,b)
// a = index do item(a partir de onde vc quer que ele tire)
// b = quantidade de itens a tirar , se não for especificado
// ele retira todos os itens a partir do index (1 parametro)
list.splice(1, 2);
console.log(list)

// juntar dois arrays
let list2 = ['prato','liquidificador','forno']
let list3 = list.concat(list2);
console.log(list3)


// ordena o array em ordem alfabetica
list.sort();
console.log(list);
// inverte a ordem que estiver
list.reverse();
console.log(list);


// METÓDOS AVANÇADOS


let lista = [45,4,9,16,25];


// funciona como uma estrutura de repetição
// percorre todos os elementos do array
// executa determinada ação e retorna um novo conteúdo
let lista2 = [];
lista2 = lista.map( function(item) {
    return item * 2;
} )
console.log(lista2)

// outra forma de fazer
let lista3 = []
for (let i in lista) {
    lista3.push(lista[i] * 2);
}
console.log(lista3)


// filtra os itens de uma array
let lista4 = [];
lista4 = lista.filter( function(item){
    if (item<20) {
        return true; // este retorno vai manter o item
    }else{
        return false; // este retorno retira o item
    }
} )
console.log(lista4)


// filtra o array inteiro every, tudo do array
// se um dos itens não satisfaz é false
let lista5 = []
lista5 = lista.every(function(item){
    if (item>4){ // se todos os números do array forem maiores
        return true;  // do que 4 ele retorna true
    }else{                 // caso o contrário false
        return false;
    }
})
console.log(lista)
console.log(lista5)


// filtra o array inteiro some()
// porém se pelo menos um item satisfaz a condição
// ele retorna true
let lista6 = []
lista6 = lista.some(function(item){
    return (item >3)? true : false; // abreviação
})
console.log(lista6)


// mesma coisa da função find mas retorna o index
let lista7 = lista.findIndex(function(item){
    if(item == 16){
        return true;
    }else{
        return false;
    }
})
console.log(lista7)


// aplicação prática
// encontrar pessoa com o sobrenome de parametro
let array = [
    { id:1, nome: "Vitor", sobrenome: "Felício" },
    { id:2, nome:"Paulo", sobrenome:"XYZ" },
    { id:3, nome:"Fulano", sobrenome:"Da Silva" }
]
let pessoa = array.find( function(item){
    if(item.sobrenome === "XYZ"){
        return true;
    }else{
        return false;
    }
} )
console.log(pessoa)