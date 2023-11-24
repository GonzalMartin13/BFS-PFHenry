export const resetForm = (setTotal, setServicios, setForm) => {
  setTotal(null);
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
    setServicios({ ...servicios, carteria: true, paqueteria: false });
  } else if (name === "paqueteria" && checked) {
    setServicios({ ...servicios, paqueteria: true, carteria: false });
  } else if (name === "carteria" && !checked) {
    setServicios({ ...servicios, carteria: false, paqueteria: true });
  } else {
    setServicios({ ...servicios, [name]: checked });
  }
};
