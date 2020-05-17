const Sequelize = require('sequelize') 

const db = require('../config/db')

// definimos el modelo
const Proyectos = db.define('proyectos',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement : true
    },

    nombre_proyecto:{
        type:Sequelize.STRING
    },

    url:{
        type:Sequelize.STRING
    }
})
module.exports = Proyectos