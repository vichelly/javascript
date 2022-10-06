function subir(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

function verify() {
    if(window.scrollY === 0) {
        // ocultar o botão
        document.querySelector('.scrollbutton').style.display = 'none';
    }else{
        // mostrar o botão
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', verify)

/* solução do timer

setInterval(verify, 1000)

*/