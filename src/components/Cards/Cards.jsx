import React from 'react';

import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
	// console.log();
	if(!confirmed){
		return 'Loading...';
	}
	// <Grid item component = {Card} xs ={12} md={3} className={cx(styles.card,styles.deaths)}>
		
	// 	    <CardContent>
	// 	    	<Typography color = "textSecondary" gutterBottom>No Data</Typography>
	// 	    	<Typography color = "textSecondary" gutterBottom>No Data</Typography>
	// 	    </CardContent>
	// 	</Grid>	
	return(

		<div className = {styles.container}>
		<Grid container spacing = {3} justify = "center">
		<Grid item component = {Card} xs ={12} md={3} className={cx(styles.card,styles.infect)}>
		    <CardContent>
		    	<Typography color = "textSecondary" gutterBottom>Infected</Typography>
		    	<Typography color = "textSecondary" gutterBottom>
		    	
		    	<CountUp
		    		start = {0}
		    		end = {confirmed.value}
		    		duration = {2}
		    		seperator = ","
		    	/>
		    	</Typography>
		    	<Typography color = "textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
		    	
		    </CardContent>
		</Grid>	
		<Grid item component = {Card} xs ={12} md={3} className={cx(styles.card,styles.recovered)}>
		
		    <CardContent>
		    	<Typography color = "textSecondary" gutterBottom>Deaths</Typography>
		    	<Typography color = "textSecondary" gutterBottom>
		    	
		    	<CountUp
		    		start = {0}
		    		end = {deaths.value}
		    		duration = {2}
		    		seperator = ","
		    	/>
		    	</Typography>
		    	<Typography color = "textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
		    	
		    </CardContent>
		</Grid>	

		<Grid item component = {Card} xs ={12} md={3} className={cx(styles.card,styles.deaths)}>
		
		    <CardContent>
		    	<Typography color = "textSecondary" gutterBottom>No Data</Typography>
		    	<Typography color = "textSecondary" gutterBottom>No Data</Typography>
		    </CardContent>
		</Grid>	
		
		</Grid>
		</div>

		)
}
export default Cards;