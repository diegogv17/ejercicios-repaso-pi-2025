const readline = require(`readline-sync`)

let BaseDelUsuario = Number(readline.question('Ingrese la base del triangulo: '));
let AlturaDelTriangulo = Number(readline.question('Ingrese la altura del triangulo: '));

function calcularAreaTriangulo(base, altura) {
    return  (base * altura)/2
}
let Formula = calcularAreaTriangulo(BaseDelUsuario,AlturaDelTriangulo )
console.log(`El área del triángulo es: ${Formula}`);
