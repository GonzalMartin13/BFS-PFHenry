export const resetForm = (setServicios, setForm) => {
  setServicios({
    discreto: false,
    cuidado: false,
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
