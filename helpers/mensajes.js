require('colors');


//esto nos permite ver como generar la seleccion de opciones de manera extricta sin ninguna libreria con el stdin, stdoutput, readline

//el readline nos permite crear interfaces para que el usuario puede escribir y eso necesita una pregunta y una respuesta y luego haber hecho eso necesita cerrarse

const menuOpts = () => {
    
    console.clear();
    return new Promise(resolve => {
        console.log('======================='.green);
        console.log(' Seleccione una opcion'.white);
        console.log('=======================\n'.green);

        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tarea`);
        console.log(`${'3.'.green} Listar Tareas Completadas`);
        console.log(`${'4.'.green} Listar Tareas Eliminadas`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir`);


        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question('\nSeleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });


}


const pause = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question(`\npresione ${'ENTER'.green} para continuar `, (opt) => {
            readline.close();
            resolve();
        });
    })

}

module.exports = {
    menuOpts,
    pause
}

