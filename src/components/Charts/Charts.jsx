import React, { useState, useEffect } from 'react';
import {Line, Bar } from 'react-chartjs-2';

import styles from './Charts.module.css';

const Charts = (props) => {

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
                    data: [props.data.cityData[9608].confirmed, props.data.cityData[9608].dead]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text:`Current County ${props.data.cityData[9608].location}`},
            }}
            />
        ) : null

    )

    console.log('doodoo')
    if (props.data.cityData[0] != null) {
        console.log(props.data.cityData[1534].location)

        for (let i = 0; i < props.data.cityData.length; i++) {
            if (props.data.cityData[i].location === "Los Angeles County, California") {
                console.log(i);
            }
        }
    }
    return(
        <div className={styles.container}>
            {barChart}
        </div>
    )
}

export default Charts;