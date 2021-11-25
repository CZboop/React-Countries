import CountriesList from '../components/CountriesList';
import { useState, useEffect } from 'react';
import "./modal.css";

const CountriesContainer = ({handleClose, show, selectedContinent, onVisit}) => {

    const [countries, setCountries] = useState([]);
    const showHideCountriesContainer = show ? "modal display-block" : "modal display-none";

    for (let i of countries) {
        i["visited"] = false;
    }

    const updateVisit = (name) =>{
        const countryToUpdate = countries.find(country => country.name.common === name);
        console.log(countryToUpdate)
        countryToUpdate.visited = true;
        console.log(countryToUpdate)
    }
    

    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response=>response.json())
        .then(data=>setCountries(data));
    }, []);

    return (
        <div className={showHideCountriesContainer}>
            <section classname="modal-main">
                <button type="button" className="countriesButton" onClick={handleClose}>Close</button>
                {countries.length > 0 ?
                <CountriesList countries={countries} selectedContinent={selectedContinent} onVisit={updateVisit}/>
                :
                <p>Loading...</p>}
            
            </section>
        </div>

    )

}

export default CountriesContainer;