var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModels')

router.get('/', async function(req,res,next){

    var novedades = await novedadesModel.getNovedades(); //query

    res.render('admin/novedades',{
        layout:'admin/layout',
        usuario:req.session.nombre,
        novedades

    });
});



module.exports = router;