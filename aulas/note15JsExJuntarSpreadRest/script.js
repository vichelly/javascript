function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]
    return novoConjunto
}

let nomes = ["Vitor", "Lucas"];

let outros = adicionar(nomes,"Maria", "Rafaela","Julia");
console.log(outros)