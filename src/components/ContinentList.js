// import continents from './continents.js'
import Continent from './Continent.js'


const ContinentList = ({continents, showCountriesContainer, setSelectedContinent}) => {
    const continentComponents = continents.map((continent) => {
        return (
        <Continent continent={continent} key={continent.id} filled={continent.filled} image_empty={continent.image_empty} image_filled={continent.image_filled} showCountriesContainer={showCountriesContainer} setSelectedContinent={setSelectedContinent}/>
    )})
    return (
        continentComponents
    )
}

export default ContinentList;