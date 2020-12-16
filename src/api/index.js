import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
	let changeableUrl = url;


	if(country){
		changeableUrl = `${url}/countries/${country}`;
	}

	try{

		const {data : {confirmed, recovored, deaths, lastUpdate}} = await axios.get(changeableUrl);
		return {confirmed, recovored, deaths, lastUpdate};
		// return response;
	}catch(error){
		console.log(error);

	}
}

export const fetchDD = async () => {
	try{

		const {data} = await axios.get(`${url}/daily`);
		console.log(data);
		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
		return modifiedData;

	}catch(error){
		console.log(error);

	}
}

export const fetchCountries = async () => {
	try{
		const {data: {countries}} = await axios.get(`${url}/countries`);
		return countries.map((country)=> country.name);
	}catch (error){
		console.log(error);
	}
}