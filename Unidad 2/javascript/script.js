// Ejercicio 9
 var nombre = prompt("Ïngrese su nombre")
 var apellido = prompt("Ïngrese su apellido")

 alert("Bienvenido " + nombre + " " + apellido)

//Ejercicio 10

 var diametro= prompt("Ingrese el diametro del círculo")
 diametro=Number(diametro)
 var radio=diametro/2
 const Pi = 3.1416

 alert("El perímetro del círculo es: " + Pi*diametro)

 alert("El area del círculo es: " + Pi*(radio*radio))

// Ejercicio 11

 var n1 = prompt("Ingrese el primer número")
 n1=Number(n1)
 var n2 = prompt("Ingrese el segundo número")
 n2=Number(n2)
 var n3 = prompt("Ingrese el tercer número")
 n3=Number(n3)
 var n4 = prompt("Ingrese el cuarto número")
 n4=Number(n4)

 var suma=n1+n2+n3+n4
 var promedio=suma/4

 alert("La suma es: " + suma + " y el promedio es: " + promedio)

// Ejercicio 12

 var valorHora = prompt("Ingrese el valor de la hora")
 valorHora=Number(valorHora)
 var horasTrabajadas = prompt("Ingrese cuántas horas trabajó en el mes") 
 horasTrabajadas=Number(horasTrabajadas)

 alert("Su sueldo es: " + horasTrabajadas*valorHora)

// Ejercicio 13

var valorHora = prompt("Ingrese el valor de la hora")
valorHora=Number(valorHora)
var horasTrabajadas = prompt("Ingrese cuántas horas trabajó en el mes")
horasTrabajadas=Number(horasTrabajadas)
var aniosAntiguedad = prompt ("Ingrese lo años de antiguedad que lleva en la empresa")
aniosAntiguedad=Number(aniosAntiguedad)
var sueldo = horasTrabajadas*valorHora

 if (aniosAntiguedad!==0){
     alert("El sueldo es: " + ((sueldo)+(0.15*sueldo)*aniosAntiguedad))
 }
 else {
     alert("El sueldo es " + sueldo)
 }


// Ejercicio 14

var valorHora = prompt("Ingrese el valor de la hora")
valorHora=Number(valorHora)
var horasTrabajadas = prompt("Ingrese cuántas horas trabajó en el mes")
horasTrabajadas=Number(horasTrabajadas)
var aniosAntiguedad = prompt ("Ingrese lo años de antiguedad que lleva en la empresa")
aniosAntiguedad=Number(aniosAntiguedad)
var segurosVendidos = prompt ("Ingrese los seguros que ha vendido")
segurosVendidos=Number(segurosVendidos)
var valorSeguroVendidoMasCaro = prompt ("Ingrese valor del seguro más caro vendido")
valorSeguroVendidoMasCaro=Number(valorSeguroVendidoMasCaro)

var sueldo = horasTrabajadas*valorHora

if (aniosAntiguedad!==0){
    alert("El sueldo final es: " + ((sueldo)+(0.50*valorSeguroVendidoMasCaro)+(0.25*sueldo)*segurosVendidos+(0.25*sueldo)*aniosAntiguedad))
}
else {
    alert("El sueldo es " + sueldo)
}
