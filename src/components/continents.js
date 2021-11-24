import asia_empty from "../images/Asia.jpg"
import asia_filled from "../images/Asia_filled.jpg"
import africa_empty from "../images/Africa.jpg"
import africa_filled from "../images/Africa_filled.jpg"
import europe_empty from "../images/Europe.jpg"
import europe_filled from "../images/Europe_filled.jpg"
import northamerica_empty from "../images/NorthAmerica2.jpg"
import northamerica_filled from "../images/NorthAmerica2_filled.jpg"
import southamerica_empty from "../images/SouthAmerica.jpg"
import southamerica_filled from "../images/SouthAmerica.jpg"
import oceania_empty from "../images/Oceania.jpg"
import oceania_filled from "../images/Oceania_filled.jpg"


const continents = [
    {
        id: 4,
        continent_name: "North America",
        image_empty: northamerica_empty,
        image_filled: northamerica_filled,
        filled: false
    },
    {
        id: 3,
        continent_name: "Europe",
        image_empty: europe_empty,
        image_filled: europe_filled,
        filled: false
    },
    {
        id: 1,
        continent_name: "Asia",
        image_empty: asia_empty,
        image_filled: asia_filled,
        filled: false
    },
    {
        id: 5,
        continent_name: "South America",
        image_empty: southamerica_empty,
        image_filled: southamerica_filled,
        filled: false
    },
    {
        id: 2,
        continent_name: "Africa",
        image_empty: africa_empty,
        image_filled: africa_filled,
        filled: false
    },
    {
        id: 6,
        continent_name: "Oceania",
        image_empty: oceania_empty,
        image_filled: oceania_filled,
        filled: false
    }
]
export default continents