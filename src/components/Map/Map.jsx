import React from 'react';
import { MapContainer, Circle, TileLayer, Marker, Popup } from 'react-leaflet';

import styles from './Map.module.css'

const Leaflet = (props) => {
        let position = [0, 0];
        const zoom = 3;
        const data = props.data;
        console.log(data);
        const items = [];
        console.log('test');
        //console.log(props.data)

        for (let key in data) {
            if (data[key].lat != null) {
                position = [data[key].lat, data[key].long];
                let confirmed = data[key].confirmed;
                let deaths = data[key].deaths;
                let recovered = data[key].recovered;
                let radius = 0.5 * confirmed;
                let color = "blue";

                if (confirmed > 500000) {
                    color = "red";
                }

                //console.log(position);
                items.push(
                <Circle className="circles" center={position} radius={radius} color={color}>
                        <Popup>
                            {key} <br />
                            Confirmed: {confirmed} <br />
                            Recovered: {recovered} <br />
                            Deaths: {deaths} <br />
                        </Popup>
                </Circle>);
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

const MyCircles = (data) => {
    //console.log(data)
    return (
        <div></div>
    )
}

export default Leaflet;