const express = require('express');
const router = express.Router();

const arrendatariosController = require('../controladores/arrendatariosController');



router.get('/', arrendatariosController.obtenerArrendatarios);
router.get('/:id', arrendatariosController.obtenerArrendatario);
router.get('/obtenerArrendatario/:id', arrendatariosController.obtenerPropiedadesEnArrendatario);
router.post('/', arrendatariosController.llamarCrearArrendatario);
router.put('/:id', arrendatariosController.llamarActualizarArrendatario);
router.delete('/:id', arrendatariosController.llamarEliminarArrendatario);
router.put('/asignarPropiedad/:id/:rfc', arrendatariosController.llamarAsignarPropiedad);


module.exports = router;

