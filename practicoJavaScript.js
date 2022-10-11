// 1.VARIABLES

let nombre = "Danidvd";

nombre = "xiomara"

// var
// let = Nos permite cambiar valor de varible en el futuro

// const = No deja cambiar nombre variable, son constantes el valor es el mismo

const apellido = "David";

apellido ="blandon";
// al aplicar este cambio me va traer un error

// Declarar Variable (let nombre)

let nombre1 = "Daniel"

// Inicializar Variable Asignarle valor (= "Daniel")

nombre = "xiomara"

// reinicializar cambiamos el valor lo reasignamos(nombre = "xiomara")

//2.strings y operaciones

// Como ambos datos son numericos me va traer la suma

let suma = 2 + 2

// Para el caso se estan sumando 2 strings (Concatenar)el resultado seria (Hola, Daniel)

let sumastrings = "Hola, " + "Daniel";

// El operador ( + ) no permite sumar "numeros" o concatenar (strings)

// Ejercicios practico variables y strings

let nombre2 = "Daniel"; // string
let apellido1 = "David"; // string
let username = "danidvd"; // string
let edad = 29; // number
let mail = "dani8439@gmail.com"; // string
let isMayorDeEdad = true; // Bollean
let dineroAhorrado = 1000; // number
let dedudas = 100; // number

let nombreCompleto = nombre2 + " " + apellido1;
let dineroReal = dineroAhorrado - dedudas;

// 3.Funciones CLASE 4 

// Que es una funcion formas en las que encapzulamos(Guardamos) codigo para reutilizar y ejecutar codigo en el futuro

function nombreCompleto2(name,lastName){
    return name + " " + lastName
};

// Cuando usar una fancion en mi codigo : cuanto tenemos variable, bloques de codigo que podrian recibir parametros y argumentos ,que podemos encapsular para reutilizar mas de uan vez en el futuro,ademas nos sirve para mejorar la legibilidad de mi codigo.

nombreCompleto2("Daniel","David");

// Las funciones reciben parametros cuando las estamos creando, les enviamos argumentos cuando las ejecutamos

function saludo(name,lastName,username){
    const completname = nombreCompleto2(name,lastName);
    console.log("Mi nombre es " + completname + " pero prefiero que me digas " + username +".");
}

// CONDICIONALES
// Que es = forma en que ejecutamos bloque de codigo u otro dependiendo de alguna condicion o validacion

// Tipos IF(else y else if) Switch
// Diferencias if (else y else if) nos permite hacer validaciones completamente distintas en cada validacion o condicional (si asi lo queremos) // switch se comparan con misma variable o condicion que definimos en el switch

// se pueden camobinar funcionaes y condicionales ,se pueden encapzular bloque de codigo ,incluyendo condicionales.

//CICLOS es la forma de ejecutar un bloque de codigo hasta que se cumpla una condicion 

//tipos while, for ,do while

// ciclo infinito cuando no se cumple y el ciclo se sigue ejecutando(toteando la aplicacion)

for (let i =0;i < 5;i++){
    console.log("El valor de i es: "+ i)
}

let i = 0;
while(i < 5){
    console.log("El valor de i es : "+ i);
    i++;
}

let respuesta;

while(respuesta != "4"){
    let pregunta = prompt("Cuando es 2 + 2 ?")
    respuesta = pregunta;
}

// ARRAYS Y OBJETOS
// ARRAYS = ES UNA LISTA DE ELEMENTOS

const array1 = [1,"jaja,",false,true]

// objeto = lista de lelemtnos ,cada elemento tiene nombre clave

const obj = {nombre : "Peranito",edad:3,comidasFavoitas:["pollo,salchicha,arroz"]}

// cuando es mejor utlizar 1 de los 2 ?

//Arrays cuando lo que haremos en un elemtno es lo mismo en todos los demas(la regla se pueden incumplir)mientras que un objeto cuando los nombres de cada elementp son importantes para nuestro algoritmo

// se pueden mezclar 

function primerElementoArray(arr){
    console.log(arr[0])
}

//Ejecutamos de a cuerdo con la funcion me debe de traer el primer elemtno, para el caso Daniel

primerElementoArray(["Daniel","Xiomara","Maximiliano"]);


//Ejecutamos me trae todos los elementos del ARRAYS

function imprimirElemento(arr){
    for(let i = 0 ; i < arr.length ; i++){
       console.log(arr[i]) 
    }
}

imprimirElemento(["Daniel","Xiomara","Maximiliano"]);

// buscar todos los elmentos del objeto

Object.values(obj)

function imprimirElementoPorObjeto(obj){
    const arr = Object.values(obj);
    for(let i = 0; i < arr.length ; i++){
        console.log(arr[i])
    }
}


function conseguirTipoSuscripcion(suscripcion){
    if (suscripcion == "Free"){
        console.log("Solo pudes tomar los cursos gratis");
        return;
    }

    if (suscripcion == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante 1 mes");
        return;
    }

    if (suscripcion == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante 1 año");
        return;
    }

    if (suscripcion == "ExpertDuo"){
        console.log("Tu y alguien mas pueden tomar casi todos los cursos de Platzi durante 1 año");
        return;
    }
    console.warn("Ese tipo de Susucripcio no existe")
}

//Optimizando el codigo quedaria de la siguient manera  creando objeto y una propiedad y un condicional

const tipodeSuscripcion = {
    Free:"Solo pudes tomar los cursos gratis",
    Basic:"Puedes tomar casi todos los cursos de Platzi durante 1 mes",
    Expert:"Puedes tomar casi todos los cursos de Platzi durante 1 año",
    ExpertDuo:"Tu y alguien mas pueden tomar casi todos los cursos de Platzi durante 1 año",
}

function conseguirTipoSuscripcion2(suscripcion){
    if(tipodeSuscripcion[suscripcion]){
        console.log(tipodeSuscripcion[suscripcion])
        return
    }
    console.warn("Ese tipo de Susucripcio no existe")
}

