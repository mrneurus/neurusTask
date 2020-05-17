const express = require('express');
const routes = require('./routes')
const path  = require('path')
const bodyParser =require('body-parser')


const app = express();
app.set('view engine','pug')
app.set('views',path.join(__dirname,'./views'))

// arhivos estaticos
app.use(express.static('public'))

// bodyParser(para)
app.use(bodyParser.urlencoded({extended:true}))


app.use('/',routes())


app.listen(5000)