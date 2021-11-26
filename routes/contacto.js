var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/*aca muestra la vista*/
router.get('/',function(req,res,next){
    res.render('contacto',{
        isContacto: true
    });// contacto.hbs
})
/*funcionamiento del formulario*/
router.post('/', async function (req, res, next){
   console.log(req.body);//aca va procesar lo del formuilario
var nombre = req.body.nombre;
var email = req.body.email;
var tel=req.body.tel;
var mensaje = req.body.comentarios;
console.log(req.body.tel)
var obj={
    to:'flavia@gmail.com',
    subject:'contacto desde la web de transportes',
    html: nombre + 'se contacto a traves de la web y quiere recibir mas info a este correo: ' + email + '.<br> su tel es' + tel + '. <br> y su comentario es: ' + mensaje + ' .'
}

var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // escribir para que se comunique con .env
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });//cierra transport

var info = await transport.sendMail(obj);//envio de los datos
res.render('contacto',{
    message:'Mensaje enviado correctamente'
})


});


module.exports = router;