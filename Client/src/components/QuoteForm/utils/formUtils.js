export const resetForm = (setServicios, setForm) => {
  setServicios({
    certificada: false,
    fragilBox: false,
    paqueteria: true,
    carteria: false,
    express: false,
  });
  setForm({
    origen: "",
    destino: "",
    largo: "",
    ancho: "",
    alto: "",
    peso: "",
    servicios: [],
    imagen: "",
  });
};
export const handleCheck = (name, checked, servicios, setServicios) => {
  if (name === "carteria" && checked) {
    return setServicios({ ...servicios, carteria: true, paqueteria: false });
  } else if (name === "paqueteria" && checked) {
    return setServicios({ ...servicios, paqueteria: true, carteria: false });
  } else if (name === "carteria" && !checked) {
    return setServicios({ ...servicios, carteria: false, paqueteria: true });
  } else if (name === "paqueteria" && !checked) {
    return setServicios({ ...servicios, paqueteria: false, carteria: true });
  } else {
    return setServicios({ ...servicios, [name]: checked });
  }
};
export const contarServicios = (objeto) => {
  let contador = 0;

  for (const propiedad in objeto) {
    if (
      objeto[propiedad] === true &&
      (propiedad === "fragilBox" ||
        propiedad === "express" ||
        propiedad === "certificada")
    ) {
      contador += 1;
    }
  }

  return contador;
};
