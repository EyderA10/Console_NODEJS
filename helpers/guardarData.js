const fs = require('fs');

const file = './db/data.json';

//usamos el fs que viene de node para crear un archivo de tipo json preferiblemente
//usamos el writefilesync para que se cree el archivo de manera sincrona

const guardarData = (data) => {

    fs.writeFileSync(file, JSON.stringify(data));

}

module.exports = {
    guardarData
}