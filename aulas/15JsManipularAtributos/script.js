function trocarimg(filename, name){
    document.querySelector('.img').setAttribute('src',filename)
    document.querySelector('.img').setAttribute('data-hedgehog',name)
}

function pegar() {
    let animal = document.querySelector('.img').getAttribute('data-hedgehog')
    alert(animal)
}