const express = require('express');
const routes = require('./routes')
const path  = require('path')
const bodyParser =require('body-parser')

// conex a DB

const db = require('./config/db')
require('./models/proyectos')

db.sync()
    .then(() =>console.log('Conectado a la Base de datos de Neurus'))
    .catch( error => console.log(error))


const app = express();
app.set('view engine','pug')
app.set('views',path.join(__dirname,'./views'))

// arhivos estaticos
app.use(express.static('public'))

// bodyParser(para)
app.use(bodyParser.urlencoded({extended:true}))


app.use('/',routes())


app.listen(5000)