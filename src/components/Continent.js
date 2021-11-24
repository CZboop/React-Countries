import showCountriesContainer from "./Dashboard"

const Continent = ({continent, fillOnHover}) => {

    return(
        <button type="button" onClick={showCountriesContainer} onHover={fillOnHover}>
            <img src={continent.filled ? continent.image_filled : continent.image_empty}/>
        </button>
    )
}
export default Continent;