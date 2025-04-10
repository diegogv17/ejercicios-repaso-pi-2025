const readline = require (`readline-sync`)
const CONTRASENA_CORRECTA = 'claveSegura'
let contrasena = readline.question(`Ingrese la contrasena: `)
do {
    if(contrasena === CONTRASENA_CORRECTA){
        console.log("Acceso permitido")
    } else {
        console.log("Contraseña incorrecta")
        contrasena = readline.question('Ingrese la contrasena nuevamente: ')
    }
   
} while (contrasena !== CONTRASENA_CORRECTA);