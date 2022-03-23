console.log("Simulador de dado")

let a = prompt("Ingrese cuantos dados quiere tirar del 1 al 4, ingrese 0 para salir")

function azar()
{
    var num = Math.random()
    var num2 = num * 6 ;
    var dado = Math.ceil(num2);
    return dado
}

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
        let y = azar()
        alert(`dado ${x}: ${y}`);
    }
}
a = prompt("Ingrese cuantos dados quiere tirar del 1 al 4, ingrese 0 para salir")
}
alert("Gracias por participar");





