const jwt = require("jsonwebtoken");


function autenticacion(req, res, next){

	let jwtToken = req.header("Authorization");

	jwtToken = jwtToken.split(" ")[1];

//si no existe token
	if(!jwtToken) return res.status(400).send("No existe Token para validar")

// si existe un jwt
	try{
		const payload = jwt.verify(jwtToken,"Clave");
		req.usuario = payload;
		next();

	} catch (error){
		res.status(400).send("Token No valido")
	}
}

//exports

module.exports = autenticacion;