import React from 'react';
import { MapContainer, Circle, TileLayer, Marker } from 'react-leaflet';

const Leaflet = (props) => {
        const position = [37.7749, -122.4194];
        const zoom = 13;
        const data = props.data;
        console.log('test');
        //console.log(props.data)

        for (let key in data) {
            if (data[key].lat != null) {
                console.log(data[key].lat, data[key].long);
            }
        }

        return (
            <MapContainer center={position} zoom={zoom}  style={{ width: '100%', height: '500px'}}>
                      <TileLayer
                        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                        attribution={'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
                        />
                        <Marker position={position}>

                        </Marker>
            </MapContainer>
        )
}

const MyCircles = (data) => {
    //console.log(data)
    return (
        <div></div>
    )
}

export default Leaflet;