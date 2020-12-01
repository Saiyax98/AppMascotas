// modulos internos

const express = require("express");
const router = express.Router();

const {Mascota} = require("../model/mascota");
const {Usuario} = require("../model/usuario");


const autenticacion = require("../Middleware/autenticacion");

//ruta para insertar una tarea
router.post("/", autenticacion, async(req, res) =>{

	
	const usuario = await Usuario.findById(req.usuario._id);

	
	if (!usuario) return res.status(400).send("El usuario no existe");

	const mascota = new Mascota({

		idUsuario: usuario._id,
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		tipo: req.body.tipo,
	});


	const result = await mascota.save();
	res.status(200).send(result);

});



router.get("/listar", autenticacion, async(req, res) =>{
	
	const usuario = await Usuario.findById(req.usuario._id);

	if(!usuario) return res.status(400).send("El usuario no existe");

	const mascota = await Tarea.find({idUsuario: req.usuario._id});
	res.send(mascota);
});



router.put("/", autenticacion, async(req, res) =>{
	
	const usuario = await Usuario.findById(req.usuario._id);

	if(!usuario) return res.status(400).send("El usuario no existe");

	const mascota = await Tarea.findByIdAndUpdate(
		req.body._id, {
			idUsuario: usuario._id,
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			tipo: req.body.tipo,
		},{
			new: true,
		}
		);

if(!mascota) return res.status(400).send("No existe la mascota");

res.status(200).send(mascota);

});


router.delete("/:_id", autenticacion, async(req, res) =>{

	const usuario = await Usuario.findById(req.usuario._id);

	if(!usuario) return res.status(400).send("No existe");

	const mascota = await Tarea.findByIdAndDelete(req.params._id);
	
	if (!mascota) return res.status(400).send("No existe");

	res.status(200).send({message: "Actividad eliminada"});
});

module.exports = router;

