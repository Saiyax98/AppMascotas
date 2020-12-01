//definir modulos internos que se usaran

const express = require("express");
const router = express.Router();

//invocar nuestros modulos creados

const {Usuario} = require("../Model/usuario");

router.post("/", async(req,res) =>{
	let usuario = await Usuario.findOne({correo: req.body.correo});

	//si el correo existe en la bd entonces

	if(usuario) return res.status(400).send("El usuario ya existe en la base de datos")

	//Si no existe pues

	usuario = new Usuario ({
		nombre: req.body.nombre,
		correo: req.body.correo,
		password: req.body.password,
	});

// enviar el usuario a la BD y generar un JWT

const result = await usuario.save();
const jwtToken = usuario.generateJWT();
res.status(200).send({jwtToken})

});

//exportamos los modulos

module.exports = router;