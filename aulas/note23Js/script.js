async function inserir(){
    document.getElementById('posts').innerHTML = "Carregando...";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'GET',
        body: JSON.stringify({
            title:'Teste',
            body:'teste',
            userId:4
        }),
        headers:{
            'content-type': 'application/json'
        }
    });
    let json = await req.json();
    console.log(json)
;}