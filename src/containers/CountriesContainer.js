import CountriesList from '../components/countries/CountriesList';
import "./modal.css";

const CountriesContainer = ({handleClose, show, selectedContinent, countries, handleUpdateCountryVisited}) => {
    const showHideCountriesContainer = show ? "modal display-block" : "modal display-none";


    return (
        <div className={showHideCountriesContainer}>
            <section classname="modal-main">
                <button type="button" className="globalButton" onClick={handleClose}>Close</button>
                {countries.length > 0 ?
                <CountriesList countries={countries} selectedContinent={selectedContinent} handleUpdateCountryVisited={handleUpdateCountryVisited}/>
                :
                <p>Loading...</p>}
            
            </section>
        </div>

    )

}

export default CountriesContainer;