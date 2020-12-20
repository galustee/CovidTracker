import React from 'react';  
import styles from './Cards.module.css'  
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

      
    return (  
        <div className={styles.container}>  
            <Grid container spacing = {3} justify="center">  
                <Grid style={{backgroundColor: '#A9B7A4'}} item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>  
                    <CardContent >  
                        <Typography color="textSecondary" gutterBottom>Global Infected</Typography>  
                        <Typography variant="h5" >  
                            <CountUp start={0} end={props.data.worldData.confirmed.value} duration={3} separator="," />  
                        </Typography>  
                        <Typography color="textSecondary">{new Date(props.data.worldData.lastUpdate).toDateString()}</Typography>                
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>  
                    </CardContent>  
                </Grid>  
  
                <Grid style={{backgroundColor: '#688D82'}} item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>  
                    <CardContent>  
                        <Typography color="textSecondary" gutterBottom>Global Recovered</Typography>  
                        <Typography variant="h5" >  
                            <CountUp start={0} end={props.data.worldData.recovered.value} duration={3} separator="," />  
                        </Typography>   
                        <Typography color="textSecondary" >{new Date(props.data.worldData.lastUpdate).toDateString()}</Typography>  
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>  
                    </CardContent>  
                </Grid>  
  
                <Grid style={{backgroundColor: '#7E9376'}}  item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>  
                    <CardContent>  
                        <Typography color="textSecondary" gutterBottom>Global Deaths</Typography>  
                        <Typography variant="h5" >  
                            <CountUp start={0} end={props.data.worldData.deaths.value} duration={3} separator="," />  
                        </Typography>  
                        <Typography color="textSecondary" >{new Date(props.data.worldData.lastUpdate).toDateString()}</Typography>  
                        <Typography variant="body2">Number of deaths caused by Covid-19</Typography>  
                    </CardContent>  
                </Grid>  

                
  
                <Grid className={styles.btnGrid} >   
                 <Button  style={{backgroundColor: '#3A4E48'}} className={styles.btnMyGov}  variant="contained" color="primary" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">  
                Learn More  
                </Button>   
                <Button style={{backgroundColor: '#6A7B76'}} className={styles.btnMyGov}  variant="contained" color="primary" href="https://www.mygov.in/covid-19">  
                 Stay Safe  
                </Button>  
                 <Button style={{backgroundColor: '#57756C'}} className={styles.btnMyGov}  variant="contained" color="primary" href="https://covid19.ca.gov/get-tested/">  
                 Get Tested  
                </Button>  
                <Button style={{backgroundColor: '#55625E'}} className={styles.btnMyGov}  variant="contained" color="primary" href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits.html">  
                 Get Vaccinated 
                </Button>  
                </Grid>  
            </Grid>  
        </div>  
        )  
}  
export default Cards; 