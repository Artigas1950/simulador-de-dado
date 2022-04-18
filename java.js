class Jugador {
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Dado {
    constructor(){}

    azar() {
        var num = Math.random()
        var num2 = num * 6 ;
        var dado = Math.ceil(num2);
        return dado
    }
}


// Inicializo jugador
let jugador = new Jugador("");

// Inicializo Dado
let dado = new Dado();

// Inicializa contador
let cont = 0;

// Obtengo contador de local storage en caso de existir
if (localStorage.getItem('contador')) {
    // Obtengo contador
    let contLS = localStorage.getItem('contador');
    let contNumber = JSON.parse(contLS);

    cont = contNumber;
}


const contador = document.getElementById('contador');
contador.innerText = cont;


// Boton Tirar Dados
const btnTirarDados = document.getElementById('btn-tirar-dados');

btnTirarDados.addEventListener('click', (event) => {
    event.preventDefault();

    const inputNombre = document.getElementById('nombre');
    const inputCantDados = document.getElementById('cant-dados');

    let nombre = inputNombre.value;
    let cantDados = inputCantDados.value;

    if (nombre == "" || cantDados < 1 || cantDados > 4) {
        // Error
        console.log('error al mandar el formulario');
    } else {
        // Correcto
        jugador['nombre'] = nombre;

        cont++;

        // Guardo contador en el Local Storage
        localStorage.setItem('contador', JSON.stringify(cont));

        const contador = document.getElementById('contador');
        contador.innerText = cont;

        const listaDados = document.getElementById('lista-dados');
        
        if (cantDados == 1) {
            // 1 Dado
            listaDados.innerHTML = `Resultados: ${dado.azar()}`;
        } else if (cantDados == 2) {
            // 2 Dados
            listaDados.innerHTML = `Resultados: ${dado.azar()}, ${dado.azar()}`;
        } else if (cantDados == 3) {
            // 3 Dados
            listaDados.innerHTML = `Resultados: ${dado.azar()}, ${dado.azar()}, ${dado.azar()}`;
        } else {
            // 4 Dados
            listaDados.innerHTML = `Resultados: ${dado.azar()}, ${dado.azar()}, ${dado.azar()}, ${dado.azar()}`;
        }
    } 
});

