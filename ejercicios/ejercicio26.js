const numeros = [10, 15, 20, 25, 30, 5];

let suma = 0
let contador = 0 
let i = 0

while (suma < 100 && i < numeros.length) {
    suma += numeros[i]
    contador++
    i++
}
console.log(`Suma total es de: ${suma}  y la cantida de numeros usados es de ${contador} `)