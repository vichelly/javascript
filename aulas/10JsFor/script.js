// for loop
// for loop array

let texto = '';

for( let i = 0; i <= 10; i++ ){
    texto = texto + i + '</br>'
}

document.getElementById('demo').innerHTML = texto



let carros = ['Ferrari', 'Fusca', 'Corolla', 'Creta', 'Up', 'Fox']

let html = '<ul>';

for(let i in carros) {
    html += '<li>'+carros[i]+'</li>';
}

html += '</ul>';

document.getElementById('car').innerHTML = html;  