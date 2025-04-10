const productos = [
    { nombre: 'Monitor', precio: 300 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 100 },
]

productos.sort((a, b) => { return a.precio - b.precio })
console.log(productos)
