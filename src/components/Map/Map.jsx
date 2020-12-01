import React from 'react';
import { MapContainer, Circle, TileLayer, Marker, Popup } from 'react-leaflet';

import styles from './Map.module.css'

const Leaflet = (props) => {
        let position = [0, 0];
        const zoom = 3;
        const data = props.data;
        console.log(data);
        const items = [];
       // console.log('test');
        //console.log(props.data)

        for (let key in data) {
            if (key != 'data') {
                let pos = [data[key].latitude, data[key].longitude];
                let confirmed = data[key].confirmed;
                let dead = data[key].dead;
                let recovered = data[key].recovered;
                let location = data[key].location;

                let radius = 0.1 * confirmed;
                let color = "blue";

                if (confirmed > 500000) {
                    color = "red";
                }

                //console.log(position);
                items.push(
                <Circle className="circles" key={key} center={pos} radius={radius} color={color}>
                        <Popup>
                            {location} <br />
                            Confirmed: {confirmed} <br />
                            Recovered: {recovered} <br />
                            Deaths: {dead} <br />
                        </Popup>
                </Circle>);
            
                console.log(pos);
                console.log(confirmed);
            }
            
        }

        return (
            <MapContainer center={position} zoom={zoom}  style={{ width: '100%', height: '500px'}}>
                      <TileLayer
                        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                        attribution={'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
                        />
                        {items}
            </MapContainer>
        )
}


export default Leaflet;