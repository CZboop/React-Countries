import CountriesList from '../components/CountriesList';
import { useState, useEffect } from 'react';

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const getCountryData = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response=>response.json())
        .then(data=>setCountries(data));
    }

    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response=>response.json())
        .then(data=>setCountries(data));
    }, []);

    return (
        
        countries.length > 0 ?
        <>
        <CountriesList countries={countries}/>
        </>
        :
        <>
        <p>Loading...</p>
        </>
    )

}

export default CountriesContainer;