const redline = require(`readline-sync`)
let CorreoDelUsuario = redline.question(`Ingrese su correo: `)
function validarCorreo(correo) {
    if (correo === `@` && correo === `.`) {
        console.log ("Correo válido")
    } else {
        console.log( "Correo inválido")
    }
}

validarCorreo(CorreoDelUsuario)
