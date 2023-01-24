require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const encrypt = require("mongoose-encryption");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// solicitudes o declaraciones previas /////////////////


// conectar atlas
mongoose.connect("mongodb+srv://mibasededatos:6lOAmdx56J81HWjH@clustermiapp.fjzc0.mongodb.net/MiAppDB", {useNewUrlParser: true});


//Base de datos
//1. Esquema
const Schema = mongoose.Schema;
const usuarioSchema = new Schema ({
    nombre: String,
    email: String,
    contraseña: String
});

//Configuración encrypt-mongoose: AES
usuarioSchema.plugin(encrypt, {secret: process.env.SECRETOS, encryptedFields: ["contraseña"] });

// 2. crear el modelo
const Usuario = new mongoose.model("Usuario", usuarioSchema);




//Método post
app.post("/registrar", function (req, res){
    // guardar variables
    const usuarioFormulario = req.body.nombre;
    const emailFormulario = req.body.email;
    const contraseñaFormulario = req.body.contraseña;

    // 3. Crear documento
    const usuarioBaseDatos = new Usuario ({
        nombre: usuarioFormulario,
        email: emailFormulario,
        contraseña: contraseñaFormulario
    });

    //4. subir a la base de datos o guardar.
    usuarioBaseDatos.save();
});






//////// 2 fragmentos necesarios para implementar heroku

// usar estáticos cuando esta en modo produccion //
if(process.env.NODE_ENV === 'production') {
app.use(express.static('frontend/build'));
app.get("*", (req, res) => {
    res.sendFile((__dirname + "/frontend/build/index.html"));
})
}


// cambio de puerto en heroku
let port = process.env.PORT;
if (port == null || port == "") {
port = 5000;
}
////////// 2 fragmentos necesarios para implementar heroku



// react usa puerto 3000. Server debe usar otro puerto
app.listen(port, function(){
    console.log("servidor de express funcionado");
})