let timer
function start(){
    timer = setTimeout(function(){
        document.querySelector('.demo').innerHTML = 'Rodou'
    }, 2000)
}
function stop(){
    clearTimeout(timer);
}