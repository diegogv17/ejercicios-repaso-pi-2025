let opcion = `editar`

switch (opcion) {
    case `editar`:
        console.log("Editando datos")
        break;

        case `Ver`:
        console.log("Mostrando perfil")
        break;

        case `salir`:
        console.log ("Saliendo del sistema")
        break;

    default:
        console.log("Opción no válida")
        break;
}