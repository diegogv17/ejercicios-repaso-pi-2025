const redline = require(`readline-sync`)
function saludar(nombre) {
    console.log(`Hola, ${nombre}. Bienvenido a la clase de programación.`)
}   
let NombreDelusuario = redline.question(`ingrese su nombre: `)
saludar(NombreDelusuario)