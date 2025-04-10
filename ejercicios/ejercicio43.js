import chalk from 'chalk'
const carrito = ['Pan', 'Leche', 'Huevos', 'Queso']
let eliminado = carrito.pop();
console.log(`Se ha eliminado ${chalk.red(eliminado)} del carrito`)
console.log(carrito)