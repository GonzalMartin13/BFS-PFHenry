function calcularCostoEnvio(origen, destino, servicios) {

    const costosBase = {
        centro: 0,
        norte: 10,
        sur: 10,
        este: 10,
        oeste: 10,
        sudeste: 7,
        sudoeste: 7,
        noreste: 7,
        noroeste: 7
    };

    const costosServicio = {
        rapido: 0.5,
        discreto: 0.35,
        cuidado: 0.75,
        carteria: 0.1
    };

    if (!(origen in costosBase) || !(destino in costosBase)) {
        return "Lugar de origen o destino no válido";
    }

    const costoBase = 5 + costosBase[destino];

    const costoAdicionalServicios = servicios.reduce((total, servicio) => {
        const costoServicio = costosServicio[servicio] || 0;
        return total + costoServicio;
    }, 0);

    const costoTotal = costoBase * (1 + costoAdicionalServicios);

    return (costoTotal.toFixed(2) + " usd");
}

// Ejemplos de uso
console.log(calcularCostoEnvio("centro", "norte", ["rapido", "carteria"]));
console.log(calcularCostoEnvio("sudeste", "sudoeste", ["discreto", "cuidado"]));
console.log(calcularCostoEnvio("noreste", "oeste", ["cuidado", "rapido", "discreto"]));
console.log(calcularCostoEnvio("norte", "sudeste", ["carteria"]));
