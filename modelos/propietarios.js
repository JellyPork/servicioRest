const propiedadesMod = require('./propiedades');

const propietarios = [
  { RFC: "ABCD123456EFG", nombre: "Juan Perez",propiedades: [], imagen: null },
  { RFC: "HIJK789012LMN", nombre: "Maria Garcia",propiedades: [], imagen: null },
];

function findAll() {
  return propietarios;
}

function findByRFC(rfc) {
  let propietario = propietarios.find(e => e.RFC == rfc);
  return propietario;
}

function findPropiedadesEnPropietario(rfc) {
  const propietario = findByRFC(rfc);

  if (!propietario) {
    return "propietario no encontrada";
  }

  return propietario.propiedades;
}

function crearPropietario(propietarioBody) {
  const { RFC, nombre,propiedades,imagen } = propietarioBody;
  propietarios.push({ RFC, nombre, propiedades, imagen });
  return "Propietario creado exitosamente";

}

function actualizarPropietario(rfc, propietarioBody) {
  const propietario = propietarios.find(e => e.RFC == rfc);
  if (!propietario) {
    return "Propietario no encontrada"
  }

  propietario.RFC = propietarioBody.RFC;
  propietario.nombre = propietarioBody.nombre;
  propietario.imagen = propietarioBody.imagen;

  return "Propiedad actualizada";
}


function eliminarPropietario(rfc) {
  const index = propietarios.findIndex(index => index.RFC === rfc);

  if (index === -1) {
    return "Propiedad no encontrada";
  }

  propietarios.splice(index, 1);
  return "Propiedad eliminada";

}


module.exports = {
  propietarios,
  findAll,
  findByRFC,
  findPropiedadesEnPropietario,
  crearPropietario,
  actualizarPropietario,
  eliminarPropietario,
  
};
