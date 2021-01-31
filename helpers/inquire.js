const inquire = require('inquirer');


//usamos la libreria inquirer que nos permite hacer interfaces de usuarios y usar diferentes modos de mostrarle al usuario como tiene que seleccionar las opciones todo en async y await

require('colors');

const question = [
    {
        type: 'list',
        name: 'options',
        message: '¿Que desea Hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar Tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar Tareas Borradas`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar Tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
        ]
    }

]

const menuOpts = async () => {
    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una opcion'.white);
    console.log('=======================\n'.green);

    const {options} = await inquire.prompt(question);
    return options;
}

const pausa = async() => {

    const question = [
        {
            type:'input',
            name:'enter',
            message:`Presione ${'ENTER'.green} para continuar..`
        }
    ]

    console.log('\n');
    await inquire.prompt(question);

}

const leerInput = async(message) => {

    const question = [
        {
            type: 'input',
            name: 'tarea',
            message,
            validate(value) {
                if(value.length === 0){
                    return 'Por favor ingresa algun valor';
                }
                return true
            }
        }
    ]

    const { tarea } = await inquire.prompt(question);

    return tarea;
}

module.exports = {
    menuOpts,
    pausa,
    leerInput
}

