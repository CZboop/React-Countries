import showCountriesContainer from "../Dashboard"
import { useState } from "react"

const Continent = ({continent, showCountriesContainer, setSelectedContinent}) => {

    const [img, setImg] = useState(continent.image_empty)

    const fillOnHover = () => {
        if(img === continent.image_empty){
            setImg(continent.image_filled)
        }else{
            setImg(continent.image_empty)
        }
    }

    const handleClick = (chosenContinent) => {
        showCountriesContainer();
        setSelectedContinent(chosenContinent)
    }

    return(
        <button type="button" className="continentButton" onClick={() => handleClick(continent.continent_name)}>
            <img className="continentImage" src={img} onMouseEnter={() => fillOnHover()} onMouseLeave={() => fillOnHover()}/>
        </button>
    )
}
export default Continent;