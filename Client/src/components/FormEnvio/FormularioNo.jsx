import React from "react";
import { provincias } from "../QuoteForm/utils/provincias";
import { Formik } from "formik";
import * as styles from "../FormEnvio/FormEnvio.module.css";
import sucursales from "./sucursales";

const FormEnvio = () => {
  return (
    <Formik>
      {() => (
        <div>
          <div className={styles.formRemitente}>
            <div>
              <p>Datos del Remitente</p>
              <label>Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Luis Alberto Morales"
              ></input>
            </div>
            <div>
              <label>Razon social</label>
              <input
                type="text"
                id="razonSocial"
                name="razonSocial"
                placeholder="Particular o Empresa SA de CV"
              ></input>
            </div>
            <div>
              <label>Telefono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                placeholder="54786978"
              ></input>
            </div>
            <div>
              <label>Calle</label>
              <input
                type="text"
                id="calle"
                name="calle"
                placeholder="Santa Rosa"
              ></input>
            </div>
            <div>
              <label>Numero</label>
              <input
                type="text"
                id="numero"
                name="numero"
                placeholder="45a"
              ></input>
            </div>
            <div>
              <label>CP</label>
              <input
                type="text"
                id="cp"
                name="cp"
                placeholder="B1636FDA"
              ></input>
            </div>
            <select>
              <option value="" in="provincia" name="provincia">
                Selecciona una provincia
              </option>
              {provincias.map((p, i) => (
                <option key={i}>{p}</option>
              ))}
            </select>
          </div>
          {/* debajo son los datos del destinatario */}
          <div className={styles.formDestinatario}>
            <div>
              <p>Datos del Destinatario</p>
              <label>Nombre Completo</label>
              <input
                type="text"
                id="nombreDest"
                name="nombreDest"
                placeholder="Luis Alberto Morales"
              ></input>
            </div>
            <div>
              <label>Razon social</label>
              <input
                type="text"
                id="razonSocialDest"
                name="razonSocialDest"
                placeholder="Particular o Empresa SA de CV"
              ></input>
            </div>
            <div>
              <label>Telefono</label>
              <input
                type="text"
                id="telefonoDest"
                name="telefonoDest"
                placeholder="54786978"
              ></input>
            </div>
            <div>
              <label>Calle</label>
              <input
                type="text"
                id="calleDest"
                name="calleDest"
                placeholder="Santa Rosa"
              ></input>
            </div>
            <div>
              <label>Numero</label>
              <input
                type="text"
                id="numeroDest"
                name="numeroDest"
                placeholder="45a"
              ></input>
            </div>
            <div>
              <label>CP</label>
              <input
                type="text"
                id="cp"
                name="cp"
                placeholder="B1636FDA"
              ></input>
            </div>
            <select>
              <option value="" in="provinciaDest" name="provinciaDest">
                Selecciona una provincia
              </option>
              {provincias.map((p, i) => (
                <option key={i}>{p}</option>
              ))}
            </select>
          </div>
       
          <div>
            <button>hey</button>
          </div>
          <div>
            <button>Enviar</button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default FormEnvio;
