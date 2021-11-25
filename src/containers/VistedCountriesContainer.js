import "./modal.css";
import Country from "../components/countries/Country";


const VisitedCountriesContainer = ({countries, handleClose, visitedShow, handleUpdateCountryVisited}) => {
    const showHideVisitedCountriesContainer = visitedShow ? "modal display-block" : "modal display-none";

    const visitedCountriesComponents = countries
    .filter(country => country.visited == true)
    .map(country => {return(
        <Country country={country} key={country.id} handleUpdateCountryVisited={handleUpdateCountryVisited}/>
    )})

    return(
        <div className={showHideVisitedCountriesContainer}>
            <section classname="modal-main">
                <button type="button" className="globalButton" onClick={handleClose}>Close</button>
                {visitedCountriesComponents.length > 0 ?
                visitedCountriesComponents
                :
                <p>Loading...</p>}
            
            </section>
        </div>
    )

}

export default VisitedCountriesContainer;