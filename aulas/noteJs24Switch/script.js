let profession ='policial'

console.log("Profissão "+profession);

switch(profession){
    case 'fiscal':
        console.log('Sua camiseta será verde')
        break;
    case 'policial':
        console.log('Sua camiseta será azul')
        break;
    case 'bombeiro':
        console.log('Sua camiseta será vermelha')
        break;
    
    default:
        console.log('Sua camiseta será preta')
        break;
}