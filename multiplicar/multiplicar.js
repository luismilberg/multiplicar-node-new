const fs = require('fs');
const colors = require ('colors');

let listarArchivo = (base, limite = 10) => {
    if(!Number(base)){
        console.log(`El valor introducido '${base}' no es un número`.red);
        return;
    }

    console.log('=============='.green);
    console.log(`Tabla de ${base}`.green)
    console.log('=============='.green);

    for(let i = 1; i <= limite; i++){
        console.log(`${base} x ${i} = ${base * i}`);
    }
}

let crearArchivo = async ( base , limite = 10 ) => {

    return new Promise((resolve, reject) => {
        let data = '';
        
        if(!Number(base)){
            reject(`El valor introducido '${base}' no es un número`.red);
            return;
        }
        
        for(let i = 1; i <= 10; i++){
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        
        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}-al-${limite}.txt`);
        });
    

    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}