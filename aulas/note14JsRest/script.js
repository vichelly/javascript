// para adicionar mais de um no parametro

// não vai funcionar
function adicionar_falho(numeros) {
    console.log(numeros);
}
// só recebe o primeiro
adicionar_falho(5,6,7,8,9,10);



// a maneira certa é usando o rest
function adicionar(...numeros) {
    console.log(numeros);
}
// recebe tudo
adicionar(1,2,3,4,5,6,7,8,9,10,11);
