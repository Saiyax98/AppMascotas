// modulos internos

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const esquemaMascotas = new mongoose.Schema({

	idUsuario: String,
	nombre: String,
	descripcion: String,
	tipo: ['Perro','Gato','Pez','Conejo','Ave','Hamster']
});

//exports

const Mascota = mongoose.model("tarea", esquemaMascotas);

module.exports.Mascota = Mascota;
module.exports.esquemaMascotas = esquemaMascotas;
