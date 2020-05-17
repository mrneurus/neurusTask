// importamos el modelo
const proyectos = require('../models/proyectos')
const slug = require('slug')

exports.proyectosHome = (req,res)=>{
    res.render('index',{
        titlePage:'NeurusTask'
    })
}

exports.formProyecto = (req,res)=>{
    res.render('nuevoproyecto',{
        titlePage:'Nuevo-Proyecto'
    })
} 

exports.agregarProyecto = async (req,res) => {

       /*  console.log(req.body); */
        
        // validar input
        const {nombre} = req.body
        const {val} = req.body.nombre //nose porqu no me capta el {nombre}, cree un objeto ue solo valida
        console.log(req.body.nombre)

        let errores = []

        if (!nombre){
            errores.push({'texto': 'Agrega un nombre al proyecto'})
        }

        // si hay errorres en el array
        if (errores.length > 0){
            res.render('nuevoproyecto',{
                titlePage:'Nuevo-Proyecto',
                errores
            })
            
         }else{

        const url = (slug(nombre).toLocaleLowerCase())
        const project = await proyectos.create({nombre,url });
        res.redirect('/')
            // .then( () => console.log('Insertado en Mysql'))
            // .catch( error => console.log(error)  )
         /* console.log({nombre}) */
        }
}