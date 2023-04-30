const propiedades = require('../modelos/propiedades');
const utils = require('../modelos/utils');


async function obtenerPropiedades(req, res) {
    res.json(propiedades.findAll());
}

// Obtener una propiedad por su clave_catastral
async function obtenerPropiedad(req, res) {
  const clave_catastral = req.params.id;
  await res.json(propiedades.findByClave(clave_catastral));
}

async function obtenerPropietariosEnPropiedad(req, res) {
  await res.json(propiedades.findPropietariosDePropiedad(req.params.id));
}

async function obtenerArrendatarioEnPropiedad(req, res) {
  await res.json(propiedades.findArrendatarioDePropiedad(req.params.id));
}

async function llamarCrearPropiedad(req, res){
  const propiedad = await propiedades.crearPropiedad(req.body);

  return res.json(propiedad);
}

async function llamarActualizarPropiedad(req, res) {
  const clave = req.params.id;
  const propiedad = await propiedades.actualizarPropiedad(clave, req.body);
  return res.json(propiedad);
}

async function llamarEliminarPropiedad(req, res) {
  const clave = req.params.id;
  const propiedad = await propiedades.eliminarPropiedad(clave);
  return propiedad;
}

async function llamarAsignarPropietario(req, res) {
  return res.json(utils.asignarPropietarioEnPropiedad(req.params.id,req.params.rfc));
}
async function llamarAsignarArrendatario(req, res) {
  return res.json(utils.asignarArrendatarioEnPropiedad(req.params.id,req.params.rfc));
}


module.exports = {
  obtenerPropiedades,
  obtenerPropiedad,
  obtenerPropietariosEnPropiedad,
  obtenerArrendatarioEnPropiedad,
  llamarCrearPropiedad,
  llamarActualizarPropiedad,
  llamarEliminarPropiedad,
  llamarAsignarPropietario,
  llamarAsignarArrendatario
};
