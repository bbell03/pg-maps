import 'devextreme/dist/css/dx.light.css';
import logo from './logo.svg';
import './map.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

function Map() {
  return (
    <div className="Map">
      <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      </MapContainer>
    </div>
  );
}

export default Map;
