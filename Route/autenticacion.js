const express = require("express");
const router = express.Router();

const {Usuario} = require("../Model/usuario");

//ruta
router.post("/", async(req, res) =>{

	const usuario = await Usuario.findOne({correo: req.body.correo});

	if(!usuario) return res.status(400).send("Informacion invalida");

	if(usuario.pass !== req.body.pass) return res.status(400).send("Informacion invalida");

	const jwtToken = usuario.generateJWT();
	res.status(200).send({jwtToken});

})

module.exports = router;