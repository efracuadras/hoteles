var mongoose = require('mongoose');
var usuarios  = mongoose.model('usuarios');

//RENDER THE VIEW LOGIN
exports.login = function (req, res, next)
{
  res.render('login')
}

//GET - Return all tvshows in the DB
exports.entrar = function(req,res,next) 
{
	//obtenemos el usuario que trata de entrar al sistema
 	var usuario_req = req.body.usuario;
 	var contrasena_req = req.body.contrasena;

  	usuarios.findOne({'usuario': usuario_req },function(err, usuario)
    {
		if(err) //ERROR DE CONEXION O ALGO ASI..
		{
			res.send(500, err.message);
		}
		if(usuario && usuario_req == usuario.usuario && contrasena_req == usuario.contrasena)
		{
			  res.send("Usuario CORRECTO");
		}
		else
		{
			res.json({ error : true });
		}
    });
};
