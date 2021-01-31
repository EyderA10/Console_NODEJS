const Tarea = require("./tarea")


class Tareas {

    _listado = {}

    //con el getter mediante una funcion de js recorremos todas las keys o ids que se crean al momento de crear un tarea en un objeto gracias al object.keys

    //se recorren y se pasan como un nuevo parametro dentro de la propiedad con el [key]

    //el _listado[tarea.id] nos indica que dentro de ese objeto vacio se creara una nueva propiedad que sera un id y dentro de esa propiedad se estara guardando el objeto con el = tarea

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tareas = this._listado[key];
            listado.push(tareas);
        });
        return listado;
    }

    constructor() {
        this._listado = {}
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;