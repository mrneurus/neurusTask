const Sequelize = require('sequelize') 

const db = require('../config/db')

// definimos el modelo
const proyectos = db.define('proyectos',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement : true
    },

    nombre: Sequelize.STRING,

    url:{
        type:Sequelize.STRING
    }
})
module.exports = proyectos;