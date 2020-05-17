//rutas :: 
const express = require('express')
const router = express.Router();
const proyectoController = require('../controllers/proyectoController')


module.exports = function(){

    router.get('/',proyectoController.proyectosHome)
    router.get('/nuevo-proyecto',proyectoController.formProyecto)
    router.post('/nuevo-proyecto' , proyectoController.agregarProyecto)
    

    return router;

}
