function verde() {
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.add('verde');
}
function vermelho() {
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.add('vermelho');
}
function azul() {
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.add('azul');
}


function trocar() {
    if (document.querySelector('#ex').classList.contains('preto')) {
        document.querySelector('#ex').classList.remove('preto')
    }else{
        document.querySelector('#ex').classList.add('preto')
    }
}