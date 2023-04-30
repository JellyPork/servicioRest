const propietariosMod = require('../modelos/propietarios');
const e = require('cors');


const propiedades = [
  { clave_catastral: "LM-20-102" , descripcion: "Casa grandota", propietarios: [], arrendatario: null, imagenes: [] },
  { clave_catastral: "XA-03-008" , descripcion: "Casa chiquita", propietarios: [], arrendatario: null, imagenes: [] },
];

function findAll() {
  return propiedades;
}

function findByClave(clave) {
  let propiedad = propiedades.find(e => e.clave_catastral == clave);
  return propiedad;
  
}

function findPropietariosDePropiedad(clave) {
  const propiedad = findByClave(clave);

  if (!propiedad) {
    return "Propiedad no encontrada";
  }

  return propiedad.propietarios;
}

function findArrendatarioDePropiedad(clave) {
  const propiedad = findByClave(clave);

  if (!propiedad) {
    return "Propiedad no encontrada";
  }

  return propiedad.arrendatario;
}

function crearPropiedad(propiedadBody) {
  const { clave_catastral, descripcion, propietarios, arrendatario } = propiedadBody;
  if (propiedades.some(propiedad => propiedad.clave_catastral === clave_catastral)) {
    return "La propiedad ya existe";
  }


  // Agregar la propiedad a la lista
  propiedades.push({ clave_catastral, descripcion, propietarios, arrendatario, imagenes: [] });
  return "Propiedad Creada exitosamente";  
}

function actualizarPropiedad(clave,propiedadBody) {
  const propiedad = propiedades.find(propiedad => propiedad.clave_catastral === clave);
  if (!propiedad) {
    return res.status(404).send('Propiedad no encontrada');
  }
  propiedad.clave_catastral = propiedadBody.clave_catastral;
  propiedad.descripcion = propiedadBody.descripcion;
  propiedad.imagenes = propiedadBody.imagenes;

  
  return "Propiedad actualizada correctamente"

}

function eliminarPropiedad(clave) {
  const index = propiedades.findIndex(index => index.clave_catastral === clave);

  if (index === -1) {
    return "Propiedad no encontrada";
  }

  propiedades.splice(index, 1);

  
}



module.exports = {
  propiedades,
  findAll,
  findByClave,
  findPropietariosDePropiedad,
  findArrendatarioDePropiedad,
  crearPropiedad,
  actualizarPropiedad,
  eliminarPropiedad,
};