let info = ["Vitor Lucas", "Vitor", "Lucas","@vichelly_"];

//let [nomeCompleto, nome, sobrenome, instagram] = info;
let [nomeCompleto, , ,instagram] = info; // gasta menos memória
console.log(nomeCompleto, instagram);



let [nome, sobrenome] = ['Vitor', 'Lucas'];
console.log(nome, sobrenome);



function criar() {
    let a = [1,2,3];
    return a;
}
let [a,b,c] = criar();
console.log(a,b,c);
