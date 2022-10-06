let timer;

function start(){
    //atualizar o horário
    timer = setInterval(showTime, 1000);
}

function stop(){
    clearInterval(timer);
}

// pegar o horário
function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
}
