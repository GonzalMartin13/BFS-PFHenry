import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import sucursales from "./Sucursales";

const Mapa = () => {
  const position = [-35.4132981, -65.0205861];
  const myIcon = new Icon ({
    iconUrl:"https://i.imgur.com/3q59VGo.png",
    iconSize:[38,38]
  })

 
  return (
    <div style={{ height: "400px", width: "95%", display: "flex", margin: "auto"  }}>
      <MapContainer
        center={position}
        zoom={4}
        style={{ height: "390px", width: "95%", margin: "auto" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>

        {sucursales.map(sucursal => (
            <Marker key={sucursal.key} position={sucursal.coordenadas} icon={myIcon}>
                <Popup>{sucursal.Popup}</Popup>
            </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapa;
