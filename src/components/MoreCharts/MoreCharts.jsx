import React, { useState, useEffect } from 'react';
import {Line, Bar, Polar, Doughnut } from 'react-chartjs-2';

import styles from './MoreCharts.module.css';

const MoreCharts = (props) => {

    let country;
    let city;
    let us;
    let oc;

    //console.log(props)

    if (props.data.city !== ''){
        console.log(props.data.city.city)
    }


    //console.log(props.country.country.country)

   // console.log(props.data.cityData)

    //console.log(props.data.city.city.city)

   // console.log(props.country)

    // from https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }



    if (props.data.countryData[0] != null) {
        for (let i = 0; i < props.data.countryData.length; i++) {
            if (props.data.countryData[i].location.includes(props.country.country.country))
            {
                country=i;
            }
            if (props.data.countryData[i].location.includes('United States'))
            {
                us=i;
                console.log(us)
            }
        }
    }

    if (props.data.city !== '') {
        for (let i = 0; i < props.data.cityData.length; i++) {
            if (props.data.cityData[i].location.includes(props.data.city.city))
            {
                city=i;
            }
            if (props.data.cityData[i].location.includes('Orange County, California'))
            {
                oc=i;
                console.log(oc);
            }
        }
    }

    const newbarChart = (
        props.data.countryData[country] ? (
            <Bar
            data={{
                labels: ['Confrimed', 'Dead'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)', 
                        'rgba(255, 0, 0, 0.5)'
                    ],
                    data: [props.data.countryData[country].confirmed, props.data.countryData[country].dead]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text:`${props.country.country.country}`},
            }}
            />
        ) : null

    )

    const citiesCharts = (
        props.data.cityData[city] ? (
            <Bar
            data={{
                labels: ['Confrimed', 'Dead'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)', 
                        'rgba(255, 0, 0, 0.5)'
                    ],
                    data: [props.data.cityData[city].confirmed, props.data.cityData[city].dead]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text:`${props.data.city.city}`},
            }}
            />
        ) : null
    )

    return(
        <div className={styles.container}>
            <div className ={styles.charts}>
            {newbarChart}
            </div>
            <div className ={styles.charts}>
            {citiesCharts}
            </div>
        </div>
    )
}

export default MoreCharts;