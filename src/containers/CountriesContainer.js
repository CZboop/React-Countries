import CountriesList from '../components/CountriesList';
import { useState, useEffect } from 'react';
import "./modal.css";
import Dashboard from '../components/Dashboard';

const CountriesContainer = ({handleClose, show}) => {

    const [countries, setCountries] = useState([]);
    const showHideCountriesContainer = show ? "modal display-block" : "modal display-none";

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
        <div className={showHideCountriesContainer}>
            <section classname="modal-main">
                
                <>
                <CountriesList countries={countries}/>
                </>
                
                <button type="button" onClick={handleClose}>Close</button>
            </section>
        </div>
        :
                <>
                <p>Loading...</p>
                </>
    )

}

export default CountriesContainer;