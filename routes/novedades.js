var express = require('express');
var router = express.Router();
var novedadesModels = require('../models/novedadesModels');
var cloudinary = require('cloudinary').v2;

router.get('/',async function(req,res,next){

    var novedades = await novedadesModels.getNovedades();

    novedades = novedades.map(novedad =>{
        if(novedad.img_id){
            const imagen = cloudinary.url(novedad.img_id,{
                width:960,
                height:200,
                crop:'fill'
            });
            return{
                ...novedad,
                imagen
            }
        }else{
            return{
                ...novedad,
                imagen:''
            }
        }
    })

    res.render('novedades',{
        isNovedades:true,
        novedades
        
    });// novedades.hbs
})




module.exports = router;