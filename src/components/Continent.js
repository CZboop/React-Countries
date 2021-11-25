import showCountriesContainer from "./Dashboard"
import { useState } from "react"

const Continent = ({continent}) => {

    const [img, setImg] = useState(continent.image_empty)

    const fillOnHover = () => {
        if(img === continent.image_empty){
            setImg(continent.image_filled)
        }else{
            setImg(continent.image_empty)
        }
    }

    return(
        <button type="button" className="continentButton" onClick={showCountriesContainer}>
            <img className="continentImage" src={img} onMouseEnter={() => fillOnHover()} onMouseLeave={() => fillOnHover()}/>
        </button>
    )
}
export default Continent;