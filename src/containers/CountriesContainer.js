import CountriesList from '../components/CountriesList';
import { useState, useEffect } from 'react';
import "./modal.css";

const CountriesContainer = ({handleClose, show}) => {

    const [countries, setCountries] = useState([]);
    const showHideCountriesContainer = show ? "modal display-block" : "modal display-none";

    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response=>response.json())
        .then(data=>setCountries(data));
    }, []);

    return (
        countries.length > 0 ?
        <div className={showHideCountriesContainer}>
            <section classname="modal-main">
                <button type="button" onClick={handleClose}>Close</button>
                <>
                <CountriesList countries={countries}/>
                </>
            </section>
        </div>
        :
                <>
                <p>Loading...</p>
                </>
    )

}

export default CountriesContainer;