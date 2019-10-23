const descripcion =  {
    demand: true,
    alias : 'd',
    desc: 'Descripcion de la tarea por hacer'
}

completado =  {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
        .command('crear','Crea una nueva tarea', {
            descripcion
        })
        .command('listar','Lista las tareas por hacer')
        .command('actualizar','Actualiza una tarea por hacer', {
            descripcion,
            completado
        })
        .command('borrar','Borra una tarea por hacer', {
            descripcion
        })
        .help()
        .argv;

module.exports = {
    argv
}