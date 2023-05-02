const express = require('express');
const router = express.Router();


const propietariosController = require('../controladores/propietariosController');


router.get('/', propietariosController.obtenerPropietarios);
router.get('/:id', propietariosController.obtenerPropietario);
router.get('/obtenerPropiedades/:id', propietariosController.obtenerPropiedadesEnPropietario);
router.post('/', propietariosController.llamarCrearPropietario);
router.put('/:id', propietariosController.llamarActualizarPropietario);
router.delete('/:id', propietariosController.llamarEliminarPropietario);
router.put('/asignarPropiedad/:id/:rfc', propietariosController.llamarAsignarPropiedad);

module.exports = router;