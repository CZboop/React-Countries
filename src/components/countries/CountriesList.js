import Country from './Country'

const CountriesList = ({countries, selectedContinent}) => {
    const countryComponents = countries.filter(country=>country.continents.includes(selectedContinent)).map( (country) => {
        return (
            <Country country={country} key={country.id}/>
        )
    })
    return (
        <div className="CountriesList">{countryComponents}</div>
    )

}
export default CountriesList;