//  modulos internos

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Esquema de la collecion usuarios

const esquemaUsuario = new mongoose.Schema({
	nombre: String,
	correo: String,
	password: String
});

// generar el JWT

esquemaUsuario.methods.generateJWT = function() {
	return jwt.sign({
		_id: this.id,
		nombre: this.nombre,
		correo: this.correo,
	},"Clave")
}

//Crear exports

const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;