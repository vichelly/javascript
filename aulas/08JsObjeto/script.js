let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado:false,
    ligar:function(){
        this.ligado = true;
        console.log("Ligando o "+this.modelo)
        console.log('vruum')
    },
    acelerar:function(){
        if (this.ligado == true){
            console.log('riiiiiriiiiiii')
        }
        else {
            console.log(this.nome+' '+this.modelo+' não está ligado!')
        }
    }
};


carro.ligar();
console.log(carro.modelo);
carro.acelerar();


let carros = [
    {nome:'Fiat', modelo:'Palio'},
    {nome:'Fiat', modelo:'Uno'},
    {nome:'Toyota', modelo:'Corolla'},
    {nome:'Ferrari', modelo:'Spider'},
]

console.log(carros[3].modelo+' '+carros[3].nome )