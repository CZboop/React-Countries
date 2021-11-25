import "./modal.css";
import { useState, useEffect } from 'react';
import CountriesList from "../components/countries/CountriesList";


const VisitedCountriesContainer = ({CountriesList, handleClose, visitedShow}) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const showHideVisitedCountriesContainer = visitedShow ? "modal display-block" : "modal display-none";

    useEffect( () => {
        
    }, []);

    return(
        <div className={showHideVisitedCountriesContainer}>
            <section classname="modal-main">
                <button type="button" className="globalButton" onClick={handleClose}>Close</button>
                {visitedCountries.length > 0 ?
                <p>{visitedCountries.map(country => country.name)}</p>
                :
                <p>Loading...</p>}
            
            </section>
        </div>
    )

}

export default VisitedCountriesContainer;