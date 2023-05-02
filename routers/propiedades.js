const express = require('express');

const router = express.Router();

const propiedadesController = require('../controladores/propiedadesController');


router.get('/', propiedadesController.obtenerPropiedades);
router.get('/obtenerPropietarios/:id', propiedadesController.obtenerPropietariosEnPropiedad);
router.get('/obtenerArrendatarios/:id', propiedadesController.obtenerArrendatarioEnPropiedad);
router.post('/', propiedadesController.llamarCrearPropiedad);
router.put('/:id', propiedadesController.llamarActualizarPropiedad);
router.get('/:id', propiedadesController.obtenerPropiedad);
router.delete('/:id', propiedadesController.llamarEliminarPropiedad);
router.put('/asignarPropietario/:id/:rfc', propiedadesController.llamarAsignarPropietario);
router.put('/asignarArrendatario/:id/:rfc', propiedadesController.llamarAsignarArrendatario);

module.exports = router;