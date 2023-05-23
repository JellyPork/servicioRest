const arrendatarios = [
  { RFC: "OPQR345678STU", nombre: "Pedro Lopez",propiedades: [], imagen: null },
  { RFC: "VWXY901234ZAB", nombre: "Ana Ramirez",propiedades: [], imagen: null },
];



function findAll() {
  return arrendatarios;
}

function findByRFC(rfc) {
  let arrendatario = arrendatarios.find(e => e.RFC == rfc);
  return arrendatario;
}


function findPropiedadesEnArrendatario(rfc) {
  const arrendatario = findByRFC(rfc);

  if (!arrendatario) {
    return "Arrendatario no encontrada";
  }

  return arrendatario.propiedades;
}

function crearArrendatario(arrendatarioBody) {
  const { RFC, nombre,imagen } = arrendatarioBody;
  arrendatarios.push({ RFC, nombre, propiedades: [], imagen });
  return "Arrendatario creado exitosamente";

}

function actualizarArrendatario(rfc, arrendatarioBody) {
  const arrendatario = arrendatarios.find(e => e.RFC == rfc);
  if (!arrendatario) {
    return "Arrendatario no encontrada"
  }

  arrendatario.RFC = arrendatarioBody.RFC;
  arrendatario.nombre = arrendatarioBody.nombre;
  arrendatario.imagen = arrendatarioBody.imagen;
}


function eliminarArrendatario(rfc) {
  const index = arrendatarios.findIndex(index => index.RFC === rfc);

  if (index === -1) {
    return "Arrendatario no encontrada";
  }

  arrendatarios.splice(index, 1);
}


module.exports = {
  arrendatarios,
  findAll,
  findByRFC,
  findPropiedadesEnArrendatario,
  crearArrendatario,
  actualizarArrendatario,
  eliminarArrendatario,
  

};