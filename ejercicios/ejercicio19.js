let num1 = 12
let num2 = 3
let operacion = '+'

if (operacion === `+`) {
    let suma = (num1 + num2)
    console.log(`el total es: ${suma}`)
} else if (operacion === `-`){
    let resta = (num1 - num2)
    console.log(`el total es: ${resta}`)
}else if (operacion === `*`){
    let multiplicacion = (num1 * num2)
    console.log(`el total es: ${multiplicacion}`)
}else if (operacion === `/`){
    let division = (num1 / num2)
    console.log(`el total es: ${division}`)
}