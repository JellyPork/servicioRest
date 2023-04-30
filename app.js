const express = require('express');
const bodyParser = require('body-parser');

const propiedadesController = require('./controladores/propiedadesController');
const propietariosController = require('./controladores/propietariosController');
const arrendatariosController = require('./controladores/arrendatariosController');

const app = express();
const port = 3000;

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>');
});

app.get('/propiedades', propiedadesController.obtenerPropiedades);
app.get('/propiedades/obtenerPropietarios/:id', propiedadesController.obtenerPropietariosEnPropiedad);
app.get('/propiedades/obtenerArrendatarios/:id', propiedadesController.obtenerArrendatarioEnPropiedad);
app.post('/propiedades', propiedadesController.llamarCrearPropiedad);
app.put('/propiedades/update/:id', propiedadesController.llamarActualizarPropiedad);
app.get('/propiedades/:id', propiedadesController.obtenerPropiedad);
app.delete('/propiedades/delete/:id', propiedadesController.llamarEliminarPropiedad);
app.put('/propiedades/asignarPropietario/:id/:rfc', propiedadesController.llamarAsignarPropietario);
app.put('/propiedades/asignarArrendatario/:id/:rfc', propiedadesController.llamarAsignarArrendatario);




app.get('/propietarios', propietariosController.obtenerPropietarios);
app.get('/propietarios/:id', propietariosController.obtenerPropietario);
app.get('/propietarios/obtenerPropiedades/:id', propietariosController.obtenerPropiedadesEnPropietario);
app.post('/propietarios', propietariosController.llamarCrearPropietario);
app.put('/propietarios/update/:id', propietariosController.llamarActualizarPropietario);
app.delete('/propietarios/delete/:id', propietariosController.llamarEliminarPropietario);
app.put('/propietarios/asignarPropiedad/:id/:rfc', propietariosController.llamarAsignarPropiedad);


app.get('/arrendatarios', arrendatariosController.obtenerArrendatarios);
app.get('/arrendatarios/:id', arrendatariosController.obtenerArrendatario);
app.get('/arrendatarios/obtenerArrendatario/:id', arrendatariosController.obtenerPropiedadesEnArrendatario);
app.post('/arrendatarios', arrendatariosController.llamarCrearArrendatario);
app.put('/arrendatarios/update/:id', arrendatariosController.llamarActualizarArrendatario);
app.delete('/arrendatarios/delete/:id', arrendatariosController.llamarEliminarArrendatario);
app.put('/arrendatarios/asignarPropiedad/:id/:rfc', arrendatariosController.llamarAsignarPropiedad);


// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});