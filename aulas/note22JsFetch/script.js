function load() {

    document.getElementById("posts").innerHTML = 'Carregando...'

    fetch( 'https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json();
        })
        .then(function(json){
            montarblog(json)

            console.log(json);
            document.getElementById("posts").innerHTML = json.lenght+' posts';
        })
}

function montarblog(lista) {
    let html = '';

    for(let i=0;i<lista.lenght;i++){
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr/>';
    }
    document.getElementById("posts").innerHTML = html;
}