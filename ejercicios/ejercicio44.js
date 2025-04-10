const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
]

const ProductosConIva = productos.map(producto => {
    return { nombre: producto.nombre, precioConIva: producto.precio * 1.21 }
})
console.log(ProductosConIva)