import React from "react";
import { MapContainer, Circle, TileLayer, Marker, Popup } from "react-leaflet";
import { Checkbox, FormControlLabel } from "@material-ui/core";

import styles from "./Map.module.css";

const Leaflet = (props) => {
    const [state, setState] = React.useState({
        checkedA: true,
    })
  //  console.log(props);
  let position = [0, 0];
  const zoom = 3;
  const countryData = props.data.countryData;
  const provinceData = props.data.provinceData;
  //console.log(countryData);

  const items = CountryCircles(countryData);
  //const items = ProvinceCircles(countryData, provinceData)

  return (
    <div>
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          attribution={
            '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          }
        />
        {items}
      </MapContainer>
      <FormControlLabel
        control={
          <Checkbox
             checked={state.checkedA}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="States/Provinces"
      />
    </div>
  );
};

const CountryCircles = (data) => {
  const items = [];

  for (let key in data) {
    if (key !== "data") {
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
        <Circle
          className="circles"
          key={key}
          center={pos}
          radius={radius}
          color={color}
        >
          <Popup>
            {location} <br />
            Confirmed: {confirmed} <br />
            Recovered: {recovered} <br />
            Deaths: {dead} <br />
          </Popup>
        </Circle>
      );

      // console.log(pos);
      // console.log(confirmed);
    }
  }

  return items;
};

const ProvinceCircles = (countryData, provinceData) => {
  const items = [];
  let flag = false;

  for (let key in countryData) {
    if (key !== "data") {
      for (let key2 in provinceData) {
        if (key2 !== "data") {
          if (countryData[key].country_code === provinceData[key2].country_code) {
            flag = true;
          }
        }
    
    }

    if (flag === false) {
        let pos = [countryData[key].latitude, countryData[key].longitude];
        let confirmed = countryData[key].confirmed;
        let dead = countryData[key].dead;
        let recovered = countryData[key].recovered;
        let location = countryData[key].location;

        let radius = 0.1 * confirmed;
        let color = "blue";

        if (confirmed > 500000) {
          color = "red";
        }

        //console.log(position);
        items.push(
          <Circle
            className="circles"
            key={location}
            center={pos}
            radius={radius}
            color={color}
          >
            <Popup>
              {location} <br />
              Confirmed: {confirmed} <br />
              Recovered: {recovered} <br />
              Deaths: {dead} <br />
            </Popup>
          </Circle>
        );
      }

      flag = false;




      
    }

    // console.log(pos);
    // console.log(confirmed);
  }

  for (let key in provinceData) {
    if (key !== "data") {
        let pos = [provinceData[key].latitude, provinceData[key].longitude];
        let confirmed = provinceData[key].confirmed;
        let dead = provinceData[key].dead;
        let recovered = provinceData[key].recovered;
        let location = provinceData[key].location;

        let radius = 0.1 * confirmed;
        let color = "blue";

        if (confirmed > 500000) {
          color = "red";
        }

        //console.log(position);
        items.push(
          <Circle
            className="circles"
            key={location}
            center={pos}
            radius={radius}
            color={color}
          >
            <Popup>
              {location} <br />
              Confirmed: {confirmed} <br />
              Recovered: {recovered} <br />
              Deaths: {dead} <br />
            </Popup>
          </Circle>
        );
      }
        
        
    }

    return items;
}
export default Leaflet;
