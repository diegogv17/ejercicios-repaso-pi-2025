const estudiantes = [
    { nombre: 'Ana', nota: 85 },
    { nombre: 'Luis', nota: 45 },
    { nombre: 'Carla', nota: 70 },
]

let notasfiltradas = estudiantes.filter(estudiante => estudiante.nota >= 60)
console.log(notasfiltradas)