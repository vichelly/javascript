// retorna a data com informações completas
let d = new Date();
console.log(d)

// retorna informações resumidas
console.log(d.toDateString())


// manipular a data JANEIRO é 0
// ano, mês, dia, hora, minuto, segundos
let a = new Date(1954, 0, 19, 15, 30, 12);
// outro jeito usando um padrão
// os meses são contados normalmente 
let b = new Date('2026-05-16 7:44:17');
console.log(a)
console.log(b)



let e = new Date();

// retorna o ano
console.log(e.getFullYear());
// retorna o mês
console.log(e.getMonth());
// retorna o dia
console.log(e.getDate());
// retorna as horas
console.log(e.getHours());
// retorna os minutos
console.log(e.getMinutes());
// assim vai getMinutes(), gerMilliseconds() etc...

// pega os milisegundos 
let f = Date.now();
console.log(f)
