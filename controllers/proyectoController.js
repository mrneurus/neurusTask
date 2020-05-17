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

exports.agregarProyecto = (req,res) => {

        // console.log(req.body);
        
        // validar input
        const {nombre} = req.body
        console.log = nombre

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
            
         }
         else{
            res.send('enviado a la BD')
        }
    
}