//1

/*
Inicio
    Identificar el puente
    ubicar inicio puente
    caminar inicio puente
    subir escaleras hasta la parte superior
    recorrer el puente
    bajar las escaleras
    continuar camino
Fin
*/

//2. Recibir 2 números e mprima la suma de ambos

let numero1=4

let numero2=5

let suma=numero1+numero2

console.log('la suma del numero ',numero1,' y el numero ',numero2,' es: ', suma)

//3. calcule la edad de una persona con su año de nacimiento

let añoNacimiento = 1984

let edad = (2022 - añoNacimiento)

console.log('la edad es: ',edad)


//4. calcular promedio 5 notas estudiante de ingenieria

const notas = [4,3,4.5,5,4]

let sumaNotas = 0

for (let i=0; i<5; i++){
    sumaNotas+=notas[i]
    
}
let promedio = (sumaNotas/5)

console.log('el promedio de las 5 notas es: ',promedio)



//5. muestre la suma de los primeros 10 numeros impares

let numerosImpares = 1
let sumaImpares = 1

for (let i=0; i<9; i++){
    numerosImpares += 2
    sumaImpares +=numerosImpares
    
}
console.log('La suma de los 10 números impares es: ',sumaImpares)



