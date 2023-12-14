/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Cards from "../Card/Cards";
import Slider from "../Carrousel/Carrousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import iconoEnvio from "../../assets/envio.svg";
import Reviews from "../Reviews/reviews";
import ShowReviews from "../../views/showReviews/showreviews";
import { useEffect } from "react";
import { setStateInvoice } from "../../redux/Slices/invoiceUserSlice";
import { clearShippingState } from "../../redux/Slices/shippingSlice";
import { clearState } from "../../redux/Slices/quoterslice";
import SeguimientoEnvio from "../seguimientoEnvio/seguimiento";
const Home = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    dispatch(setStateInvoice());
    dispatch(clearShippingState());
  }, []);

  return (
    <div style={{ position: "relative" }}>
{/*       <h2 className="title-carousel margin center-items">
        ¡Tenemos un <b>gran compromiso</b>!
      </h2> */}
      <SeguimientoEnvio/>
      <br />
      <Slider />
      <br />
      <br />
      <br />
      <h3 className="title-carousel margin center-items">
        ¡Conoce <b>nuestros servicios</b> adaptados a nuestros clientes!
      </h3>
      <Cards />
      <Reviews />
      <br />
      <ShowReviews />
      <br />
      <br />
    </div>
  );
};

export default Home;
