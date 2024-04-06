// Iteration 1: Names and Input
let hacker1 = "David";
console.log("El Nombre del conductor es " + hacker1);
let hacker2 = "david";
console.log("El nombre del navegante es " + hacker2);
// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length ) {
    console.log("El conductor tiene el nombre más largo, tiene " + hacker1.length + " caracteres");
} else if (hacker1.length < hacker2.length) {
    console.log("Parece que el navegante tiene el nombre más largo, tiene " + hacker2.length + " caracteres");
} else if (hacker1.length === hacker2.length)  {
    console.log("Vaya, ambos tienen nombres igual de largo, " + hacker1.length + " caracteres");
}

// Iteration 3: Loops
var nuevaCadena = "";
for (let i = 0; i < hacker1.length ; i++) {
    nuevaCadena += hacker1[i].toUpperCase() + " "
}
console.log(nuevaCadena);
var cadenaInversa = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
    cadenaInversa += hacker2[i]
}
console.log(cadenaInversa);


var hacker1Mayus = hacker1.toUpperCase()
var hacker2Mayus = hacker2.toUpperCase()

if (hacker1Mayus > hacker2Mayus) {
    console.log("El nombre del conductor va primero.");
} else if (hacker2Mayus > hacker1Mayus) {
    console.log("Yo, el navegador va primero definitivamente.");
} else if (hacker1Mayus === hacker2Mayus) {
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}