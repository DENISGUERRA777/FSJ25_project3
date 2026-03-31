// EJERCICIO 1 - Verificar si una persona es mayor o menor de edad
function ejercicio1() {
    const edad = parseInt(document.getElementById("edad").value);
    const resultado = edad < 18
        ? "Usted es menor de edad."
        : "Bienvenido, eres mayor de edad.";
    document.getElementById("resultadoEdad").textContent = resultado;
}

// EJERCICIO 2 - Calcular nota final de un alumno
function ejercicio2() {
    const nombre = document.getElementById("nombre").value;
    const carnet = document.getElementById("carnet").value;
    const examen = parseFloat(document.getElementById("examen").value);
    const tareas = parseFloat(document.getElementById("tareas").value);
    const asistencia = parseFloat(document.getElementById("asistencia").value);
    const investigacion = parseFloat(document.getElementById("investigacion").value);
    const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

    document.getElementById("resultadoNota").textContent =
        `Alumno: ${nombre} | Carnet: ${carnet} | Nota Final: ${notaFinal.toFixed(2)}`;
}

// EJERCICIO 3 - Calcular aumento de salario según categoría
function ejercicio3() {
    const categoria = document.getElementById("categoria").value.toUpperCase();
    const salario = parseFloat(document.getElementById("salario").value);
    const nombre = document.getElementById("name").value;
    const aumentos = { A: 0.15, B: 0.30, C: 0.10, D: 0.20 };

    if (!aumentos[categoria]) {
        document.getElementById("resultadoSalario").textContent =
            "Datos inválidos, ingrese una categoría entre A y D.";
        return;
    }

    const aumento = salario * aumentos[categoria];
    const salarioFinal = salario + aumento;
    document.getElementById("resultadoSalario").textContent =
        `Nombre: ${nombre} | Categoría: ${categoria} | Aumento: $${aumento.toFixed(2)} | Salario final: $${salarioFinal.toFixed(2)}`;
}

// EJERCICIO 4 - Mostrar el número mayor entre dos enteros
function ejercicio4() {
    const first = parseInt(document.getElementById("primerNumero").value);
    const second = parseInt(document.getElementById("segundoNumero").value);

    if (Number.isNaN(first) || Number.isNaN(second)) {
        document.getElementById("resultadoMayor").textContent =
            "Estás ingresando caracteres no válidos, intenta nuevamente.";
        return;
    }

    const mayor = Math.max(first, second);
    document.getElementById("resultadoMayor").textContent = `El número mayor es: ${mayor}`;
}

// EJERCICIO 5 - Mostrar descuento del modelo Ford seleccionado
function fiesta() {
    document.getElementById("salida").textContent =
        "Elegiste el Ford Fiesta, tienes un 5% de descuento.";
}

function fFocus() {
    document.getElementById("salida").textContent =
        "Elegiste el Ford Focus, tienes un 5% de descuento.";
}

function fEscape() {
    document.getElementById("salida").textContent =
        "Elegiste el Ford Escape, tienes un 5% de descuento.";
}

// EJERCICIO 6 - Mostrar descuento según destino seleccionado
function ejercicio6() {
    const destino = document.getElementById("destinos").value;
    let descuento;

    if (destino === "La costa del Sol" || destino === "La Palma") {
        descuento = "Su destino tiene un descuento del 5%.";
    } else if (destino === "Panchimalco") {
        descuento = "Su destino tiene un descuento del 10%.";
    } else {
        descuento = "Su destino tiene un descuento del 15%.";
    }

    document.getElementById("respuesta").textContent = descuento;
}

// EJERCICIO 7 - Analizar 10 números enteros ingresados por el usuario
function ejercicio7() {
    const inputs = document.getElementsByClassName("numeros");
    const numeros = Array.from(inputs).map(input => parseInt(input.value));
    let negativos = 0;
    let positivos = 0;
    let multiplos = 0;
    let sumaPares = 0;

    numeros.forEach(num => {
        if (num < 0) negativos++;
        if (num > 0) positivos++;
        if (num % 15 === 0) multiplos++;
        if (num % 2 === 0) sumaPares += num;
    });

    document.getElementById("resultadoNumeros").textContent =
        `Negativos: ${negativos} | Positivos: ${positivos} | Múltiplos de 15: ${multiplos} | Suma de pares: ${sumaPares}`;
}

// EJERCICIO 8 - Tabla de multiplicar del número seleccionado
function ejercicio8() {
    const tablas = parseInt(document.getElementById("tablas").value);
    const multiplo = [];

    for (let i = 1; i <= 10; i++) {
        multiplo.push(`${tablas} x ${i} = ${tablas * i}`);
    }

    document.getElementById("multiplicacion").innerHTML = multiplo.join(" | ");
}

// EJERCICIO 9 - Convertir temperatura de Celsius a Fahrenheit
function ejercicio9() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const fahrenheit = (temperatura * 9 / 5) + 32;
    let aviso;

    if (fahrenheit >= 14 && fahrenheit < 32) {
        aviso = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        aviso = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        aviso = "Temperatura alta";
    } else {
        aviso = "Temperatura desconocida";
    }

    document.getElementById("resultadoTemperatura").textContent =
        `${fahrenheit.toFixed(2)} °F - ${aviso}`;
}

// EJERCICIO 10 - Calcular el turno con mayor promedio de edad
function ejercicio10() {
    const calcularPromedio = (className) => {
        const inputs = document.getElementsByClassName(className);
        const edades = Array.from(inputs).map(input => parseInt(input.value));
        const suma = edades.reduce((acc, val) => acc + val, 0);
        return suma / edades.length;
    };

    const promedioManana = calcularPromedio("manana");
    const promedioTarde = calcularPromedio("tarde");
    const promedioNoche = calcularPromedio("noche");

    const promedios = [promedioManana, promedioTarde, promedioNoche];
    const turnos = ["mañana", "tarde", "noche"];
    const maximo = Math.max(...promedios);
    const posicion = promedios.indexOf(maximo);

    if (posicion === -1) {
        document.getElementById("promedioAlto").textContent = "Todos los turnos tienen la misma edad promedio.";
        document.getElementById("turno").textContent = "";
        document.getElementById("dato").textContent = "";
    } else {
        document.getElementById("promedioAlto").textContent =
            `El turno con mayor edad promedio es el de la ${turnos[posicion]}.`;
        document.getElementById("turno").textContent = "El promedio de edad es:";
        document.getElementById("dato").textContent = maximo.toFixed(2);
    }
}
