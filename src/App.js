// creating a basic class base component.....

import React from 'react'
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';


class App extends React.Component{

	// state or constructor
	state = {
		data:{},    // creating an object
		country: '',
	}

async	componentDidMount(){
		const fetchdata = await fetchData();
		console.log(fetchdata);
		this.setState({data: fetchdata});
	}

handleCountryChange = async (country) => {
	console.log(country);
	const fetchedData = await fetchData(country);
	console.log(fetchedData);
	this.setState({data: fetchedData, country:country});
	// fetch data and set the state...
}

	render(){
		const {data, country} = this.state;
		return (
			<div className= {styles.container}>
			<Cards data = {data} />
			
			<Chart data = {data} country = {country}/>
			
			<CountryPicker handleCountryChange = {this.handleCountryChange}/>
			
			<h1>App</h1>
			

			</div>
			)
	}
}
export default App;