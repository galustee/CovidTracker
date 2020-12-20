import React, { useState, useEffect } from 'react';
import {Line, Bar, Polar, Doughnut } from 'react-chartjs-2';

import styles from './Charts.module.css';

const Charts = (props) => {

    let la_county;
    let countyarray = [];
    let countyconfirmed = [];
    let countynames = [];
    let californiaconfirmed = []
    let californianames = []
    let californiacolors = []

    // from https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }



    console.log('doodoo')
    if (props.data.cityData[0] != null) {
        console.log(props.data.cityData[1534].location)

        for (let i = 0; i < props.data.cityData.length; i++) {
            if (props.data.cityData[i].location === "Los Angeles County, California") {
                console.log(i);
                la_county = i;
            }
            if (props.data.cityData[i].country_code.includes('us')) {
                countyarray.push(props.data.cityData[i])
                countyconfirmed.push(props.data.cityData[i].confirmed)
                countynames.push(props.data.cityData[i].location)
                //console.log(countyarray);
                if (props.data.cityData[i].location.includes('California')) {
                    californiaconfirmed.push(props.data.cityData[i].confirmed)
                    californianames.push(props.data.cityData[i].location)
                    californiacolors.push(random_rgba())
                    console.log(californiacolors)
                }
            }
        }
    }

    const barChart = (
        props.data.cityData[0] ? (
            <Bar
            data={{
                labels: ['Confrimed', 'Dead'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)', 
                        'rgba(255, 0, 0, 0.5)'
                    ],
                    data: [props.data.cityData[la_county].confirmed, props.data.cityData[la_county].dead]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text:`Current County ${props.data.cityData[la_county].location}`},
            }}
            />
        ) : null

    )

    const doughtnutChart = (
        props.data.cityData[0] ? (
            <Doughnut
            data={{
                labels: californianames,
                datasets: [{
                    label: 'People',
                    backgroundColor: californiacolors,
                    data: californiaconfirmed
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text:`California Counties`},
            }}
            />
        ) : null
    )
    return(
        <div className={styles.container}>
            <div className ={styles.charts}>
            {barChart}
            </div>
            <div className ={styles.charts}>
            {doughtnutChart}
            </div>
        </div>
    )
}

export default Charts;