const redline = require(`readline-sync`)

let longitud = redline.question('Ingrese la longitud de la contraseña: ');
let longitudNumerica = Number(longitud);

function generarContraseña(longitud) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let contraseña = ''

    for (let i = 0; i < longitud; i++) {
        const caracteresAleatorios = Math.floor(Math.random() * caracteres.length)
        contraseña += caracteres[caracteresAleatorios]
        
    }
    return contraseña
}
console.log(`Contraseña generada: ${generarContraseña(longitudNumerica)}`);