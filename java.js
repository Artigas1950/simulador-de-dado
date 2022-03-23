console.log("Simulador de dado")

let a = prompt("Ingrese cuantos dados quiere tirar del 0 al 4")

function azar()
{
    var num = Math.random()
    var num2 = num * 6 ;
    var dado = Math.ceil(num2);
    alert(dado)
}

if (a>4)
{
    alert("numero incorrecto")
}

else if (a<=4)
{
    for(let x = 1; x <= a; x++)
    {
        azar()
    }
}



