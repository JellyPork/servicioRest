const propietarios = require('../modelos/propietarios');
const utils = require('../modelos/utils');

async function obtenerPropietarios(req, res) {
    res.json(propietarios.findAll());
}

// Obtener una propiedad por su clave_catastral
async function obtenerPropietario(req, res) {
  const rfc = req.params.id;
  await res.json(propietarios.findByRFC(rfc));
}


async function obtenerPropiedadesEnPropietario(req, res) {
  await res.json(propietarios.findPropiedadesEnPropietario(req.params.id));
}

async function llamarCrearPropietario(req, res){
  const propiedad = await propietarios.crearPropietario(req.body);

  return res.json(propiedad);
}

async function llamarActualizarPropietario(req, res) {
  const rfc = req.params.id;
  const propiedad = await propietarios.actualizarPropietario(rfc, req.body);
  return res.json(propiedad);
}

async function llamarEliminarPropietario(req, res) {
  const rfc = req.params.id;
  const propiedad = await propietarios.eliminarPropietario(rfc);
  return propiedad;
}

async function llamarAsignarPropiedad(req, res) {
  return res.json(utils.asignarPropiedadesParaPropietario(req.params.id,req.params.rfc));
}

async function llamarDesasignarPropiedad(req, res) {
  
}

module.exports = {
  obtenerPropietarios,
  obtenerPropietario,
  obtenerPropiedadesEnPropietario,
  llamarCrearPropietario,
  llamarActualizarPropietario,
  llamarEliminarPropietario,
  llamarAsignarPropiedad
};