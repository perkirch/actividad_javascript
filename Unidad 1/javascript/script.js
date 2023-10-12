// Ejercicio 1
var nombre = prompt("Ïngrese su nombre")
var apellido = prompt("Ïngrese su apellido")

alert("El nombre ingresado es " + nombre + " " + apellido)

// Ejercicio 2

var nota1 = prompt("Ingresa la primera nota")
nota1 = Number(nota1)
var nota2 = prompt("Ingresa la segunda nota")
nota2 = Number(nota2)
var nota3 = prompt("Ingresa la tercera nota")
nota3 = Number(nota3)
var promNota = (nota1 + nota2 + nota3)
promNota = Number(nota1 + nota2 + nota3)

console.log("El promedio es: " + promNota)

// Ejercicio 3

var lado1 = prompt("Ingrese el valor del primer lado")
lado1=Number(lado1)
var lado2 = prompt("Ingrese el valor del segundo lado")
lado2=Number(lado2)
var lado3 = prompt("Ingrese el valor del tercer lado")
lado3=Number(lado3)
var perimetroTriangulo = (lado1 + lado2 + lado3)

alert("El perímetro del tríangulo es: " + perimetroTriangulo)



// Ejercicio 4

var lado1 = prompt("Ingrese el valor del primer lado")
lado1=Number(lado1)
var lado2 = prompt("Ingrese el valor del segundo lado")
lado2=Number(lado2)
var lado3 = prompt("Ingrese el valor del tercer lado")
lado3=Number(lado3)
var lado4 = prompt("Ingrese el valor del cuarto lado")
lado4=Number(lado4)
var perimetroCuadrado = (lado1 + lado2 + lado3 + lado4)
var areaCuadrado = (lado1*lado1)

alert("El perímetro del cuadrado es: " + perimetroCuadrado)

alert("El area del cuadrado es: " + areaCuadrado)

// Ejercicio 5

var base = prompt("Ingrese el valor de la base")
base=Number(base)
altura=Number(altura)

var perimetroRectangulo = 2*(base+altura)
var areaRectangulo = (base*altura)

alert("El perímetro del rectángulo es: " + perimetroRectangulo)

alert("El area del rectangulo es: " + areaRectangulo)


// Elercicio 6

var n1 = prompt("Ingrese un número")
n1=Number(n1)
var n2 = prompt("Ingrese otro")
n2=Number(n2)
var resto = n1/n2

alert("El resto de la división es: " + resto)


// Elercicio 7

var nombre = prompt("Ïngrese su nombre")
var apellido = prompt("Ïngrese su apellido")

alert("Bienvenido " + nombre + apellido)

//Ejercicio 8

var radio = prompt("Ingrese el radio del círculo")
radio=Number(radio)
diametro=Number(diametro)
const Pi = 3.1416

alert("El perímetro del círculo es: " + 2*Pi*radio)

alert("El area del círculo es: " + Pi*(radio*radio))