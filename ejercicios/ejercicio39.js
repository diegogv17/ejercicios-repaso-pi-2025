const readline = require('readline-sync');

let menu = readline.question(`Ingrese el numero de la opcion que desea realizar: 
    Calculadora infinita:
    1. Sumar
    2. Salir
    `)

switch (menu) {
    case '1':
        let numeros = [];
        let continuar = true;

        while (continuar) {
            let numero = readline.questionFloat('Ingresa un numero: ');

            if (!isNaN(numero)) {
                numeros.push(numero)
            } else {
                console.log('Por favor ingresa un número válido.')
            }

            let respuesta = readline.question('¿Deseas ingresar otro numero? (si/no): ').toLowerCase();
            if (respuesta !== 'sí' && respuesta !== 'si') {
                continuar = false
            }
        }

        // Función para sumar los números en el arreglo
        function sumarArreglo(arreglo) {
            let suma = 0;
            for (let i = 0; i < arreglo.length; i++) {
                suma += arreglo[i];
            }
            return suma
        }

        let resultado = sumarArreglo(numeros);
        console.log('La suma total es: ' + resultado);
        break

    default:
        console.log('Opción no válida');
        break
}
