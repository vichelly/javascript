document.querySelector('.busca').addEventListener('submit', async (event) => {
    //previne o comportamento padrão que o formulário teria ao enviar
    //ou seja ele não vai atualizar a página
    event.preventDefault();

    //acesso ao que o usuário digitou
    let input = document.querySelector('#searchInput').value;
    
    //se tiver algo digitado...
    if(input !== '') {
        clearInfo();
        showWarning('Carregando...');

        //url da api do site open weather
        //url = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        //usei a minha API key
        //opcionais para colocar no fim da url, mudam os dados
        //units=metric
        //lang=pt_br
        let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${encodeURI(input)}&units=metric&lang=pt_br&appid=3971680e30a5c51fd95fff717b3140af&units=metric&lang=pt_br`);
        let json = await results.json();

        //condicionais para a verificação dos resultados
        //se o json.cod for 200 a api encontrou a cidade
        if(json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        } else {
            clearInfo();
            showWarning('Não encontramos esta localização.');
        }
    } else {
        clearInfo();
    }
});

function showInfo(obj) {
    showWarning('');

    document.querySelector('.titulo').innerHTML = `${obj.name}, ${obj.country}`;
    
    document.querySelector('.tempInfo').innerHTML = `${obj.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${obj.windSpeed} <span>km/h</span>`;

    document.querySelector('.temp img').setAttribute('src', 
    `http://openweathermap.org/img/wn/${obj.tempIcon}@2x.png`);
    
    document.querySelector('.ventoPonto').style.transform = `rotate(${obj.windAngle-90}deg)`;

    document.querySelector('.resultado').style.display = 'block';
}

function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}