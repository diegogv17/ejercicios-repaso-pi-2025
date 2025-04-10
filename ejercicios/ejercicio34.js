const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]
let Suma = 0
let totaldeArreglos = 0
for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas.length; j++) {
        Suma += notas[i][j];
        totaldeArreglos++
    }
}
let promedio = Suma/totaldeArreglos
console.log(promedio)