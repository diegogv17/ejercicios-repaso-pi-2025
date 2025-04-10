const readline = require(`readline-sync`)
const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
let Intentos = 0
let NumeroElegido = 0
do {
    const NumeroEnString = readline.question(`Selecione algun numero: `)
    const NumeroElegido = Number(NumeroEnString)
    Intentos++
    if (NumeroElegido === NUMERO_SECRETO) {
        console.log("¡Adivinaste!")
        console.log(`El número secreto es: ${NUMERO_SECRETO}`)
    } else {
        console.log(`¡Perdio, el numero que usted eligio fue ${NumeroElegido} y El numero secreto es: ${NUMERO_SECRETO}!`)
    }
} while (NumeroElegido !== NUMERO_SECRETO);