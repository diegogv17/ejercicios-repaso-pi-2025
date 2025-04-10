let tipo = 'bicicleta'

switch (tipo) {
    case 'carro':
        case 'moto':
            console.log("Vehículo con motor")

        break;
    case `bicicleta` :
        case `patineta` :
            console.log("Vehículo sin moto")
    break;

    default:
        console.log("Tipo desconocido")
        break;
}