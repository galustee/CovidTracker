import React from 'react';  
import styles from './Projected.module.css'  
import {Card, CardContent, Typography, Grid} from '@material-ui/core';  
import CountUp from 'react-countup';  
import cx from 'classnames';  
import Button from '@material-ui/core/Button';  
  
  
  
const Cards = (props) => {

    // props.data.provinceData
    //     if (!props.data.provinceData) loading first gives nothing then actual data
// iterate through the data array until you find what you are looking for
// ie props.data.countryData[0] == country one then .confirmed gives that amount
// make loop, search for what you want, set variable and use that to access that one specific piece of data


    if(!props.data.worldData){  
        return 'Please wait..';  
    }  
    var projectedInfected = props.data.worldData.confirmed.value * 10
    var projectedActual = props.data.worldData.deaths.value * 1000
    var toiletPaper = props.data.worldData.confirmed.value / 100

    //var projectedInfected = 100000
    //var projectedActual =100000
    //var toiletPaper =100
    return (  
        <div className={styles.container}>  
            <Grid container spacing = {3} justify="center">  
                <Grid style={{backgroundColor: '#A9B7A4'}} item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>  
                    <CardContent >  
                        <Typography color="textSecondary" gutterBottom>Projected Actual Infected</Typography>  
                        <Typography variant="h5" >  
                            <CountUp start={0} end={projectedInfected} duration={3} separator="," />  
                        </Typography>  
                        <Typography color="textSecondary">{new Date(props.data.worldData.lastUpdate).toDateString()}</Typography>                
                        <Typography variant="body2">Number of estimated actual cases</Typography>  
                    </CardContent>  
                </Grid>  
  
                <Grid style={{backgroundColor: '#688D82'}} item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>  
                    <CardContent>  
                        <Typography color="textSecondary" gutterBottom>Projected Actual Cases</Typography>   
                        <Typography variant="h5" >  
                            <CountUp start={0} end={projectedActual} duration={3} separator="," />  
                        </Typography>  
                        <Typography color="textSecondary" >{new Date(props.data.worldData.lastUpdate).toDateString()}</Typography>  
                        <Typography variant="body2">Number of projected cases of Covid-19</Typography>  
                    </CardContent>  
                </Grid>  
  
                <Grid style={{backgroundColor: '#7E9376'}}  item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>  
                    <CardContent>  
                        <Typography color="textSecondary" gutterBottom>Rolls of Toilet Paper Bought</Typography>  
                        <Typography variant="h5" >  
                            <CountUp start={0} end={toiletPaper} duration={3} separator="," />  
                        </Typography>  
                        <Typography color="textSecondary" >{new Date(props.data.worldData.lastUpdate).toDateString()}</Typography>  
                        <Typography variant="body2">Number of rolls of toliet paper bought</Typography>  
                    </CardContent>  
                </Grid>  
                
  
                
            </Grid>  
        </div>  
        )  
}  
export default Cards; 