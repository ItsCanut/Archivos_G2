var express = require('express');
var servidor = express();
var path = require('path');
var puerto = 3000;

var sqlite3 = require('sqlite3');
base_datos = new sqlite3.Database('base_datos.db', function(err) {
  if (err != null) {
    respuesta.sendStatus(503);
  }
});

servidor.use('/pagina_en_proceso/paginas', express.static(path.join(__dirname, 'public')))

servidor.get('/', function(peticion, respuesta){
  respuesta.sendFile(path.join(__dirname + '/paginas/grafica.html'));
})

servidor.get('/getMedidas', getMedidas);

function getMedidas(peticion, respuesta) {
  base_datos.all("SELECT " + peticion.query.magnitud + " FROM medidas", function(err, datos) {
    if (err) {
      respuesta.sendStatus(404);
      console.log('Error: ' + err);
    } else {
      respuesta.send(datos);
      console.log('Enviado');
    }
  });
}
servidor.listen(puerto, function(){
  console.log('En marcha el server de pruebas en el puerto ' + puerto)
});
