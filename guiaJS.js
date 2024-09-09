//EJERCICIO 1
function ejercicio1(){
    let edad= parseInt(document.getElementById("edad").value);
     edad < 18 ? console.log("usted es menor de edad") : console.log("Bienvenido, eres mayor de edad");
}

//EJERCICIO 2
function ejecicio2(){
    let examen = parseFloat(document.getElementById("examen").value);
    let tareas = parseFloat(document.getElementById("tareas").value);
    let asistencia = parseFloat(document.getElementById("asistencia").value);
    let investigacion = parseFloat(document.getElementById("investigacion").value);
    let notaFinal = (examen * 0.20)+(tareas * 0.40)+(asistencia * 0.10)+(investigacion * 0.30)

    console.log(document.getElementById("nombre").value);
    console.log(document.getElementById("carnet").value);
    console.log(notaFinal);
}

//EJERCICIO 3
function ejercicio3(){
    let categoria =document.getElementById("categoria").value;
    let salario = parseFloat(document.getElementById("salario").value);
    let nombre = document.getElementById("name").value;
    let aumento = 0.0;

    if(categoria == "A" || categoria == "a"){
        aumento = 0.15;     
    }else if(categoria =="b" || categoria == "B"){
        aumento = 0.30;
    }else if(categoria == "c" || categoria == "C"){
        aumento = 0.10;
    }else if(categoria == "d" || categoria == "D"){
        aumento = 0.20;
    }else{
        console.log("Datos invalidos, intente nuevamente");
        return;
    }
    
    console.log("Nombre:", nombre);
    console.log("Salario:", salario);
    console.log("Categoria:",categoria);
    console.log("Aumento:",(salario*aumento));
    console.log("Salario final con aumento:",salario+(salario*aumento));
}

//Ejercicio 4
function ejercicio4(){
    let first = parseInt(document.getElementById("primerNumero").value);
    let second = parseInt(document.getElementById("segundoNumero").value);

    if(Number.isNaN(first) || Number.isNaN(second)){
        console.log("Estas ingresando caracteres no validos, intenta nuevamente");
    }
    else if(first>second){
        console.log(first);
    }
    else{
        console.log(second);
    }

}

//Ejercicio 5

function fiesta(){
    document.getElementById("salida").innerHTML = "Elegiste el ford fiesta, tienes un 5% de descuento";
}
function fFocus(){
    document.getElementById("salida").innerHTML = "Elegiste el ford focus, tienes un 5% de descuento";
}
function fEscape(){
    document.getElementById("salida").innerHTML = "Elegiste el ford escape, tienes un 5% de descuento";
}

//Ejercicio 6

function ejercicio6(){
    let destino = document.getElementById("destinos").value;
    let descuento = "";

    if(destino == "La costa del Sol" || destino == "La Palma"){
        descuento = "Su destino tiene un descuento del 5%";
    }
    else if(destino == "Panchimalco"){
        descuento = "Su destino tiene un descuento del 10%";
    }
    else{
        descuento = "Su destino tiene un descuento del 15%";
    }

    document.getElementById("respuesta").innerHTML = descuento;

}

//Ejercicio 7
function ejercicio7(){
    let numeros = [];
    let negativos = 0;
    let positivos = 0;
    let multiplos = 0;
    let sumaPares = 0;
    let valor = document.getElementsByClassName("nuemeros");
    for(let i= 0; i< valor.length;  i++){
        numeros.push(parseInt(valor[i].value));
    }
    
    numeros.forEach(num=>{ if (num<0){
        negativos++;
    }})
    numeros.forEach(num=>{ if (num>0){
        positivos++;
    }})
    numeros.forEach(num=>{ if (num%15==0){
        multiplos++;
    }})
    numeros.forEach(num=>{ if (num%2==0){
        sumaPares = sumaPares + numeros[num];
    }})

    console.log(numeros);
    console.log("Numeros negativos:", negativos);
    console.log("Numeros positivos", positivos);
    console.log("Multiplos de 15", multiplos);
    console.log("Acumulado de numeros pares", sumaPares);

}

//Ejercicio 8
function ejercicio8(){
    let tablas = parseInt(document.getElementById("tablas").value);
    let multiplo = [];

    for(let i = 1;i<=10;i++){
        multiplo.push(tablas*(i));
    }
    console.log(multiplo);
    console.log(tablas);
    document.getElementById("multiplicacion").innerHTML = multiplo;
}

 //Ejercicio 9
function ejercicio9(){
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let conversion = 0.0;
    let aviso = "";

    conversion = (temperatura*9/5)+32;
    if(conversion>=14 && conversion<32){
        aviso = "Temperatura baja";
    }else if(conversion>=32 && conversion<68){
        aviso = "Temperatura adecuada"
    }else if(conversion>=68 && conversion<96){
        aviso = "Temperatura alta"
    }else[
        aviso = "Temperatura desconocida"
    ]
     console.log(conversion, "F°");
     console.log(aviso);
}

//Ejercicio 10
function ejercicio10(){
    let mañana = [];
    let tarde = [];
    let noche = [];
    let edadesM = document.getElementsByClassName("mañana");
    let edadesT = document.getElementsByClassName("tarde");
    let edadesN = document.getElementsByClassName("noche");
    let average = [];
    let sum = 0;
    let sumT = 0;
    let sumN = 0;
    let maximo = 0.0;
    let posicion = 0;
    

    for(let i= 0; i< edadesM.length;  i++){
        mañana.push(parseInt(edadesM[i].value));
    }
    for(let i= 0; i< edadesT.length;  i++){
        tarde.push(parseInt(edadesT[i].value));
    }
    for(let i= 0; i< edadesN.length;  i++){
        noche.push(parseInt(edadesN[i].value));
    }

    sum = mañana.reduce((previous, current) => current += previous);
    average.push(sum / mañana.length);
    sumT = tarde.reduce((previous, current) => current += previous);
    average.push(sumT / tarde.length);
    sumN = noche.reduce((previous, current) => current += previous);
    average.push(sumN / noche.length);

    maximo=Math.max(...average);
    posicion = average.indexOf(maximo);
    
    console.log("Promedio de edad en cada turno(mñana,tarde,noche):",average);
    console.log(posicion);
    console.log(maximo);
    if(posicion ==0){
        document.getElementById("promedioAlto").innerHTML= "el turno con mas edad promedio es el de la mañana";
        document.getElementById("turno").innerHTML = "el promedio de edad es:";
        document.getElementById("dato").innerHTML = maximo;
    }else if(posicion ==1){
        document.getElementById("promedioAlto").innerHTML= "el turno con mas edad promedio es el de la tarde";
        document.getElementById("turno").innerHTML = "el promedio de edad es:";
        document.getElementById("dato").innerHTML = maximo;
    }else if(posicion ==2){
        document.getElementById("promedioAlto").innerHTML= "el turno con mas edad promedio es el de la noche";
        document.getElementById("turno").innerHTML = "el promedio de edad es:";
        document.getElementById("dato").innerHTML = maximo;
    }else{
        document.getElementById("promedioAlto").innerHTML= "todo los turnos tiene lamisma edad";

    }
}