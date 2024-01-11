import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";



const regionToLatLng = {
  "US": [
    37.0902,
    -95.7129
],
"AT": [
    47.5162,
    14.5501
],
"SE": [
    60.1282,
    18.6435
],
"FR": [
    46.2276,
    2.2137
],
"CA": [
    56.1304,
    -106.3469
],
"MX": [
    19.4326,
    -99.1332
],
"CN": [
    35.8613,
    104.1958
],
"IN": [
    21.096,
    79.0882
],
"DE": [
    51.1655,
    10.4515
],
"BR": [
    -14.2351,
    -51.9295
],
"AR": [
    -34.6037,
    -58.3616
]

};



export default function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
  
    axios.get('http://localhost:3001/api/data').then((data)=>{
     setdata(data.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);

  const markers = data.map((item) => ({
    id: item.id,
    geocode: regionToLatLng[item.region],
    popUp: `Region: ${item.region}, Data: ${item.data}`,
    data: item.data
  }));

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <h1>Map Assessment </h1>
      <MapContainer
        style={{ width: '100vw', height: '100vh' }}
        zoom={2}
        center={[-0.09, 51.505]}
      >
        <TileLayer
          attribution="Google Maps"
          url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />

        {markers.map((marker) => (
          <CircleMarker
            center={marker.geocode}
            radius={marker.data / 100}
            stroke={false}
            fillOpacity={0.5} 
            key={marker.id}
          />
        ))}
      </MapContainer>
    </div>
  );
}
