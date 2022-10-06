// promessa de resultado
// em algum momento o resultado vai chegar
function pegartemperatura() {
    return new Promise(function(resolve, reject){
        console.log("pegando temperatura...");
        setTimeout(function(){
            resolve('40 na sombra')
        }, 2000);
    });
}
// usando a promise
pegartemperatura().then(function(resultado){
    console.log("temperatura: "+resultado);
}).catch(function(error){
    console.log("DEu erro");
})