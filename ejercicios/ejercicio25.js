const readline = require('readline-sync');
let Opcion = ``;

do {
    Opcion = readline.question(`
A. Saludo
B. Saludo personalizado
3. Cerrar programa
* `);

    switch (Opcion) {
        case `A`:
            console.log("Bienvenid@");
            break;
        case `B`:
            let nombreIngresado = readline.question('Ingrese su Nombre: ');
            console.log(`Bienvenid@ ${nombreIngresado}`);
            break;
        case `3`:
            console.log("Cerrando el programa...");
            break;
        default:
            console.log("Ingrese alguna de las opciones válidas");
            break;
    }
} while (Opcion !== `3`);