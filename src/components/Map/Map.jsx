import React from 'react';
import { MapContainer, Circle, TileLayer, Marker, Popup } from 'react-leaflet';

const Leaflet = (props) => {
        let position = [0, 0];
        let confirmed = 0;
        const zoom = 2;
        const data = props.data;
        const items = [];
        console.log('test');
        //console.log(props.data)

        for (let key in data) {
            if (data[key].lat != null) {
                position = [data[key].lat, data[key].long];
                let confirmed = data[key].confirmed;
                let deaths = data[key].deaths;
                let recovered = data[key].recovered;
                console.log(position);
                items.push(
                <Marker position={position} key={key}>
                        <Popup>
                            {key} <br />
                            Confirmed: {confirmed} <br />
                            Recovered: {recovered} <br />
                            Deaths: {deaths} <br />

                        </Popup>
                </Marker>);
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