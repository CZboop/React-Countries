import Country from '../components/Country'

const CountriesList = ({countries}) => {
    const countryComponents = countries.map( (country) => {
        return (
            <Country country={country} key={country.id} />
        )
    })
    return (
        <div className="CountriesList">{countryComponents}</div>
    )

}
export default CountriesList;