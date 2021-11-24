import showCountriesContainer from "./Dashboard"

const Continent = ({continent}) => {

    const fillOnHover = (id) => {
        const continetToUpdate = continents.find(task => task.id === id);
        continentToUpdate.filled = true;
    }

    return(
        <button type="button" onClick={showCountriesContainer}>
            <img src={continent.filled ? continent.image_filled : continent.image_empty}/>
        </button>
    )
}