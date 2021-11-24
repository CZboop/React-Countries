import './Country.css';

const Country = ({country}) => {
    return (
        <div className="CountryDiv">
            <h2>{country.name.common}</h2>
            <hr/>
            <p>Capital: {country.capital}</p>
            <p>Continent: {country.continents}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Flag: <br/><img src={country.flags.png}></img></p>

        </div>
    )

}

export default Country;