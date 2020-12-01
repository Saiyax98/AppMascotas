const express = require("express");
const mongoose = require("mongoose");
const {Usuario} = require("./Model/usuario");

const usuario = require("./Route/usuario");
const autenticacion = require("./Route/autenticacion");
const mascota = require("./Route/mascota");

//app tarea

const app = express();

app.use(express.json());

//Definimos la rita para el modulo usuarios
app.use("/api/usuario",usuario);
app.use("/api/autenticacion", autenticacion);
app.use("/api/mascota", mascota);


//Puertas de ejecucion

const port = process.env.PORT || 3001 ;
app.listen(port, () => console.log (" El puerto es: ", port));

//registro en mongo

mongoose.connect("mongodb://localhost/tareasdb" , {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
})

.then(() => console.log("conexion con mongo OK"))
.catch(() => console.log("conexion con mongo OFF"));