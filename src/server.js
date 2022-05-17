let express = require('express');
//inyección de la dependecia express
let app = express();
//app que hace la funcion del servidor 
let personsRoute = require('./routes/persons');
//incluimos el router que viene de person
require("./database");

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;
//Definición del puerto que escucha

app.listen(PORT, () =>{
    console.log('escuchando en el puerto 300')
});