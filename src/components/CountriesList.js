import Country from '../components/Country'

const CountriesList = ({countries, selectedContinent, onVisit}) => {
    const countryComponents = countries.filter(country=>country.continents.includes(selectedContinent)).map( (country) => {
        return (
            <Country country={country} key={country.id} onVisit={onVisit}/>
        )
    })
    return (
        <div className="CountriesList">{countryComponents}</div>
    )

}
export default CountriesList;