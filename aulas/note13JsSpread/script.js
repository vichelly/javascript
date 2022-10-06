let numeros = [1,2,3,4];
// acrescentar esse array a outro
// ...nomedoarray
let outros = [...numeros,5,6,7,8];
console.log(outros);


let info = {
    nome:"Vitor",
    sobrenome: "Felício",
    idade: 19,
};
// adicionar mais informações nela
// cidade estado e país
let novas = {
    ...info,
    cidade:"Santo André",
    estado:"São Paulo",
    pais: "Brasil"
};
console.log(novas);


//função para isso
function addinfo(info){
    let novainfo = {
        ...info,
        status: 0,
        token:"jsfd"
    }
    return novainfo;
}
console.log(addinfo({nome:'Vitor',sobrenome:'Fujita'}));