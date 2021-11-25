import './Country.css';
import { useState } from 'react';

const Country = ({country}) => {

    const [visited, setVisited] = useState(false)

    const updateVisit = () => {
        setVisited(!visited)
    }

    return (
        <div className={visited ?  "VisitedCountry": "CountryDiv" }>
            <h2>{country.name.common}</h2>
            <hr/>
            <p>Capital: {country.capital}</p>
            <p>Continent: {country.continents}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Flag: <br/><img className="flag" src={country.flags.png} alt={`flag of ${country.name}`}></img></p>

            <button className="globalButton"> Want to Visit </button>
            <button className="globalButton" onClick={updateVisit}> {visited ? "Not visited" : "Visited"} </button>

        </div>
    )

}

export default Country;