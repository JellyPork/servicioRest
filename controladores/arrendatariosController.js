const arrendatarios = require('../modelos/arrendatarios');
const utils = require('../modelos/utils');


async function obtenerArrendatarios(req, res) {
  res.json(arrendatarios.findAll());
}
async function obtenerArrendatario(req, res) {
  const rfc = req.params.id;
  await res.json(arrendatarios.findByRFC(rfc));
}

async function obtenerPropiedadesEnArrendatario(req, res) {
  await res.json(arrendatarios.findPropiedadesEnArrendatario(req.params.id));
}
async function llamarCrearArrendatario(req, res) {
  const arrendatario = await arrendatarios.crearArrendatario(req.body);
  return res.json(arrendatario);


}
async function llamarActualizarArrendatario(req, res) {
  const rfc = req.params.id;
  const arrendatario = await arrendatarios.actualizarArrendatario(rfc, req.body);
  return res.json(arrendatario);
}

async function llamarEliminarArrendatario(req, res) {
  const rfc = req.params.id;
  const arrendatario = await arrendatarios.eliminarArrendatario(rfc);
  return res.json(arrendatario);;
}


async function llamarAsignarPropiedad(req, res) {
  return res.json(utils.asignarArrendatarioEnPropiedad(req.params.id,req.params.rfc));
}
async function llamarAsignarArrendatario(req, res) {
  return res.json(utils.asignarPropiedadesParaArrendatario(req.params.id,req.params.rfc));
}

module.exports = {
    obtenerArrendatarios,
  obtenerArrendatario,
    obtenerPropiedadesEnArrendatario,
    llamarCrearArrendatario,
    llamarActualizarArrendatario,
  llamarEliminarArrendatario,
  llamarAsignarPropiedad,
    llamarAsignarArrendatario

};