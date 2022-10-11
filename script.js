// Leer coigo HTML, en JS

//Nos permite ller propiedades de html

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName(".Parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})


//Nos permite modificar HTML ,modificar lo que este en la etiqueta
h1.innerHTML = "Daniel <br> David";
// Nos permite solo modificar texto
h1.innerText = "Daniel <br> David";
//console.log (h1.getAttribute("verde"));
//Este nos permite modificara tributos de nuestros elementos en HTML
//h1.setAttribute("class","rojo");
//agregar Clase
h1.classList.add("rojo");
//remover clase
h1.classList.remove("verde");

input.value = "456"

//crear elemento html que nosotros queramos
const img = document.createElement("img");
img.setAttribute("src","./Maximiliano-design-hogwarts-name.gif")
console.log(img)
//No borra contenido, agregan elmento despues del contenido (append - appenchild)

pid.innerHTML = ""; // Cuando colocamos esto nos borra el contenido y si agregamos el append queda solo la imagen
pid.append(img);