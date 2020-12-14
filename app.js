const {argv} = require('./config/yargs');
const {crearArchivo, listarArchivo} = require('./multiplicar/multiplicar');
const colors = require ('colors');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;


switch (comando) {
    case 'crear':
        crearArchivo(base, limite)
            .then(resp => console.log('Archivo creado: ',colors.green(resp)))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarArchivo(base, limite);
        break;
    default:
        console.log(`Comando '${comando}' no reconocido.`.red);
        break;
}


