/* eslint-disable no-unused-vars */
// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  invoice: "",
  user: "",
  idShipping: "",
};

export const invoiceUserSlice = createSlice({
  name: "invoiceUserState",
  initialState,
  reducers: {
    setStateInvoice: (state, action) => {
      state.invoice = "";
      state.user = "";
      state.idShipping = "";
    },
    postInvoice: (state, action) => {
      state.invoice = action.payload;
    },
    setidShipping: (state, action) => {
      state.idShipping = action.payload;
    },
  },
});

export const { postInvoice, setidShipping, setStateInvoice } =
  invoiceUserSlice.actions;

export const postInvoiceAsync = (jsonn) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://api-au.craftmypdf.com/v1/create",
      {
        data: jsonn,
        load_data_from: null,
        //template_id: "87677b23815c7024", //descomentar para demo
        version: 8,
        export_type: "json",
        expiration: 10080,
        output_file: "output.pdf",
        is_cmyk: false,
        image_resample_res: 600,
        direct_download: 0,
        cloud_storage: 1,
        pdf_standard: "string",
        password_protected: "false",
        password: "string",
        postaction_s3_filekey: "string",
        postaction_s3_bucket: "string",
      },
      {
        headers: {
          "X-API-KEY": "eb36ODQ2Mzo4NDk5OlpLMFVscThta3FoQ1pOTFk",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
    dispatch(postInvoice(res.data.file));
  } catch (error) {
    console.error("Error en la acción postInvoiceAsync:", error);
  }
};

export default invoiceUserSlice.reducer;
