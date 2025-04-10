const readline = require(`readline-sync`)
const NumeroAVerificar = readline.question("Ingrese un numero para verificar si es par: ")
function esPar(numero) {
    if (numero % 2=== 0) {
        return "Es par"
    } else {
        return "Es impar"
    }
}
let NumeroAVerificarNumerico = Number(NumeroAVerificar)
let Verificador = esPar(NumeroAVerificarNumerico)

console.log(`Es numero a veficar ${Verificador}`)