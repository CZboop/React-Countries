import './Country.css';

const Country = ({country}) => {
    return (
        <div className="CountryDiv">
            <h2>{country.name.common}</h2>
            <hr/>
            <p>Capital: {country.capital}</p>
            <p>Continent: {country.continents}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Flag: <br/><img className="flag" src={country.flags.png} alt={`flag of ${country.name}`}></img></p>

            <button className="countriesButton"> Want to Visit </button>
            <button className="countriesButton"> Visited </button>

        </div>
    )

}

export default Country;