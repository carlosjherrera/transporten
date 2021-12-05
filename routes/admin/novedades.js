var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModels')

router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades(); //query

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades

    });
});

/*vista del formulario de agregar*/

router.get('/agregar', function (req, res, next) {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});
module.exports = router;