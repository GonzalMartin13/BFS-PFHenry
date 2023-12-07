import React from "react"
import { Button } from "react-bootstrap"

const Pdf = ()=>{
    const Barra =()=>{
        return (
        <nav>
        <Button>Datos</Button>
        <Button>Guia Online</Button>
        <Button>Descargar guia</Button>
        </nav>
    )}

    return(
        <div>
            <Barra/>
            <p>Guia</p>
        </div>
    )
}

export default Pdf