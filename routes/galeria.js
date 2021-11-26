var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('galeria',{
        isGaleria: true
    });// galeria.hbs
})




module.exports = router;