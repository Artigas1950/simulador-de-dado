console.log("Simulador de dado")

let nombres = prompt("Ingrese su nombre:")
let a = prompt("Ingrese cuantos dados quiere tirar del 1 al 4, ingrese 0 para salir");
const resultados = [];


class Jugador {
    constructor(nombre){
        this.nombre = nombre;
    }
}
const jugador1 = new Jugador(nombres)
console.log(jugador1)

class Dado {
    constructor(){}
    azar()
{
    var num = Math.random()
    var num2 = num * 6 ;
    var dado = Math.ceil(num2);
    return dado
}
}
const dado1 = new Dado();
console.log(dado1)

while(a!=0)
{
    if (a>4)
{
    alert("numero incorrecto");
}

else if (a<=4)
{
    for(let x = 1; x <= a; x++)
    {
        let y = dado1.azar();
        alert(`dado ${x}: ${y}`);
        resultados.push(y);
    }
}
  

a = prompt("Ingrese cuantos dados quiere tirar del 1 al 4, ingrese 0 para salir")
}
alert("Gracias por participar");
console.log(resultados);

const primerimpar = resultados.find(dado => dado % 2 !== 0);
console.log(primerimpar);

const pares = resultados.filter(dado => dado % 2 === 0);
console.log(pares);





