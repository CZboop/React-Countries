import CountriesList from '../components/countries/CountriesList';
import { useState, useEffect } from 'react';
import "./modal.css";

const CountriesContainer = ({handleClose, show, selectedContinent, onVisit}) => {

    const [countries, setCountries] = useState([]);
    const showHideCountriesContainer = show ? "modal display-block" : "modal display-none";
    

    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response=>response.json())
        .then(data=>setCountries(data));
    }, []);

    return (
        <div className={showHideCountriesContainer}>
            <section classname="modal-main">
                <button type="button" className="globalButton" onClick={handleClose}>Close</button>
                {countries.length > 0 ?
                <CountriesList countries={countries} selectedContinent={selectedContinent}/>
                :
                <p>Loading...</p>}
            
            </section>
        </div>

    )

}

export default CountriesContainer;