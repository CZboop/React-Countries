import continents from './continents.js'
import Continent from './Continent.js'


const ContinentList = ({fillOnHover}) => {
    const continentComponents = continents.map((continent) => {
        return (
        <Continent continent={continent} key={continent.id} fillOnHover={fillOnHover}/>
    )})
    return (
        continentComponents
    )
}

export default ContinentList;