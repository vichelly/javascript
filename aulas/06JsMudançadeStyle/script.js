function azul(){
    limpar();
    document.getElementById("title").classList.add('azul')
}
function vermelho(){
    limpar();
    document.getElementById("title").classList.add('vermelho')
}
function verde(){
    limpar();
    document.getElementById("title").classList.add('verde')
}


function limpar(){
    document.getElementById("title").classList.remove('azul')
    document.getElementById("title").classList.remove('vermelho')
    document.getElementById("title").classList.remove('verde')
}


function mostrartel(elemento){
    elemento.style.display = 'none'
    document.getElementById("telefone").style.display = "block";
}