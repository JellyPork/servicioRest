const propietariosMod = require('../modelos/propietarios');
const propiedadesMod = require('./propiedades');
const arrendatariosMod = require('./arrendatarios');

//Asignar Propietarios en propiedades.js
function asignarPropietarioEnPropiedad(clave, rfc) {
  const propietario = propietariosMod.findByRFC(rfc);
  const propiedad = propiedadesMod.findByClave(clave);

  const Nombre = propietario.nombre;
  const RFC = propietario.RFC;

  const propietarioArray = {
    RFC,
    Nombre
  };

  // Busca si el propietario ya está presente en el array de propietarios de la propiedad
  const propietarioExistente = propiedad.propietarios.find((p) => p.RFC === RFC);

  if (propietarioExistente) {
    return "El propietario ya está asignado a esta propiedad.";
  } else {
    propiedad.propietarios.push(propietarioArray);
    propiedadesMod.actualizarPropiedad(clave, propiedad);
    asignarPropiedadesParaPropietario(clave, rfc);
    return "Propietario asignado.";
  }
}



//Asignar Arrendatarios en propiedades.js

function asignarArrendatarioEnPropiedad(clave, rfc) {
  const arrendatario = arrendatariosMod.findByRFC(rfc);
  const propiedad = propiedadesMod.findByClave(clave);

  const Nombre = arrendatario.nombre;
  const RFC = arrendatario.RFC;

  const arrendatarioArray = {
    RFC,
    Nombre
  };

  // Verifica si hay un arrendatario asignado actualmente a la propiedad
  if (typeof propiedad.arrendatario === "object") {
    delete propiedad.arrendatario;
  }

  propiedad.arrendatario = arrendatarioArray;
  propiedadesMod.actualizarPropiedad(clave, propiedad);

  asignarPropiedadesParaArrendatario(clave, rfc);
  return "Arrendatario asignado.";
}




//Asignar Propiedades en propietarios.js
function asignarPropiedadesParaPropietario(clave, rfc) {
    let propiedad = propiedadesMod.findByClave(clave);
    let propietario = propietariosMod.findByRFC(rfc);
    const Nombre = propiedad.descripcion;
    const Clave = propiedad.clave_catastral;
    const propiedadesArray = {
    Clave,
    Nombre
    };

    const propiedadExistente = propietario.propiedades.find((p) => p.Clave === Clave);

  if (propiedadExistente) {
    return "La propiedad ya está asignada a este propietario.";
  } else {
    
    propietario.propiedades.push(propiedadesArray);
    propietariosMod.actualizarPropietario(clave, propietario);
    asignarPropietarioEnPropiedad(clave, rfc);
    return "Propiedades Asignado";
  }

   
  
}

//Asignar Propiedades en arrendatarios.js

function asignarPropiedadesParaArrendatario(clave, rfc) {
    let propiedad = propiedadesMod.findByClave(clave);
    let arrendatario = arrendatariosMod.findByRFC(rfc);
    const Nombre = propiedad.descripcion;
    const Clave = propiedad.clave_catastral;
    const propiedadesArray = {
    Clave,
    Nombre
    };

    const propiedadExistente = arrendatario.propiedades.find((p) => p.Clave === Clave);

  if (propiedadExistente) {
    return "La propiedad ya está asignada a este propietario.";
  } else {
    
    arrendatario.propiedades.push(propiedadesArray);
    arrendatariosMod.actualizarArrendatario(clave, arrendatario);
    //asignar Arrendatario en propiedad
      asignarArrendatarioEnPropiedad(clave, rfc);
    return "Propiedades Asignado";
  }

   
  
}
module.exports = {
    asignarPropietarioEnPropiedad,
    asignarPropiedadesParaPropietario,
    asignarPropiedadesParaArrendatario,
    asignarArrendatarioEnPropiedad
    
}