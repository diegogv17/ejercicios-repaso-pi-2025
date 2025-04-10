const notas = [80, 90, 70, 100]

let resultados = notas.reduce((acumulador, nota) => {
    return (acumulador + nota)/notas.length
}, 0)
console.log(resultados)