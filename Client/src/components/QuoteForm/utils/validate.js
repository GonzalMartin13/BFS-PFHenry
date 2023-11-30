export const validateForm = (form, name) => {
  let errors = {};

  if (form.origen === "") {
    errors.origen = "Debe seleccionar un origen";
  }
  if (form.destino === "") {
    errors.destino = "Debe seleccionar un destino";
  }

  if (name !== "carteria") {
    console.log("entro al if");
    if (form.largo < 1) {
      errors.largo = "Debe especificar el largo del paquete a cotizar";
    }
    if (form.alto < 1) {
      errors.alto = "Debe especificar el alto del paquete a cotizar";
    }
    if (form.ancho < 1) {
      errors.ancho = "Debe especificar el ancho del paquete a cotizar";
    }
    if (form.peso < 0.1) {
      errors.peso = "Debe especificar el peso del paquete a cotizar";
    }
  }
  if (name === "carteria" || !form.servicios.includes("carteria")) {
    return errors;
  }

  return errors;
};
export let objeto = {
  largo: " Debe especificar el largo del paquete a cotizar",
  ancho: "Debe especificar el ancho del paquete a cotizar",
  alto: "Debe especificar el alto del paquete a cotizar",
  peso: "Debe especificar el peso del paquete a cotizar",
};
// origen: "",
// destino: "",
// largo: "",
// ancho: "",
// alto: "",
// peso: "",
// servicios: [],
// total: "",
/////////////
// discreto: false,
// cuidado: false,
// paqueteria: true,
// carteria: false,
// express: false,
