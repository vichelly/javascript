var hora = 16;

if (hora < 12){
    console.log("Bom dia!")
}
else if (hora >= 12 &&  hora < 18){
    console.log("Boa tarde!")
}
else{
    console.log("Boa noite!")
}

var rush = hora;

if ( rush == 12 || rush == 18 ) {
    console.log("Você está na hora do rush!")
}
else{
    console.log("Você não está na hora do rush.")
}