let mes = 'abril'

switch (mes) {
    case 'abril':
        console.log("El mes de abril tiene 30")
        break;

    case `junio` :
    console.log("El mes de junio tiene 30")
    break;

    case 'septiembre':
        console.log("El mes de septiembre tiene 30")
        break;

    case `noviembre` :
    console.log("El mes de noviembre tiene 30")
    break;

    case 'enero':
        console.log("El mes de enero tiene 31")
        break;

    case `marzo` :
    console.log("El mes de marzo tiene 31")
    break;

    case 'mayo':
        console.log("El mes de mayo tiene 31")
        break;

    case `julio` :
    console.log("El mes de julio tiene 31")
    break;

    case `agosto` :
    console.log("El mes de agosto tiene 31")
    break;
    case `octubre` :
    console.log("El mes de octubre tiene 31")

    case `diciembre` :
        console.log("El mes de diciembre tiene 31")
    break;

    case `febrero` :
        console.log("El mes de ferebro tiene 28")
    break;
    default:
        console.log("Mes no válido")
        break;
}