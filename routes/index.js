//rutas :: 
const express = require('express')
const router = express.Router();
// express validator
const { body } = require('express-validator/check')

const proyectoController = require('../controllers/proyectoController')


module.exports = function(){

    router.get('/',proyectoController.proyectosHome)
    router.get('/nuevo-proyecto',proyectoController.formProyecto)
    router.post('/nuevo-proyecto' ,
        body('nombre').not().isEmpty().trim().escape(),
        proyectoController.agregarProyecto)
    return router;
}
