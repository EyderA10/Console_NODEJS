require('colors');

const { guardarData } = require('./helpers/guardarData');
const { menuOpts, pausa, leerInput } = require('./helpers/inquire');
const Tareas = require('./models/tareas');


 
const main = async () => {


    //inicializa en string vacion
    let opt = '';
    //Instancia logica de negocio
    const tarea = new Tareas; 

    //bucle que nos permite que el menu se va a generara hasta que el usuario oprima 0
    
    //el bucle necesita tener un await para que no se genere de manera infinita

    //con el await le indicamos que el cliente cuando seleccion una opcion se va seguir haciendo el bucle es decir le estamos indicando que espere a que el cliente seleccion la opcion hasta que seleccione el cero
    do {

        //menu de opciones
        opt = await menuOpts();

        switch (opt) {
            case '1':
                const value = await leerInput('Descripcion:'); 
                tarea.crearTarea(value);
                break;
            case '2':
                console.log(tarea.listadoArr);
                break;
        }

        //una vez creado la tarea se guarda en el archivo data.json
        guardarData(tarea.listadoArr);

        //para pausar el programa cada vez que el usuario selecciona una opcion
        (opt !== '0') && await pausa();
        
    } while (opt !== '0');

}

main();