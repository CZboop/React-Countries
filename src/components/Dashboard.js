import React, { useState, useEffect} from "react";
import CountriesContainer from "../containers/CountriesContainer";
import ContinentList from "./continents/ContinentList"
import continents from './continents/continents.js'
import './continents/Continent.css'
import VisitedCountriesContainer from "../containers/VistedCountriesContainer"

const Dashboard = () =>{
    const [countries, setCountries] = useState([]);
    const [show, setShow] = useState(false);
    const [visitedShow, setVisitedShow] = useState(false)
    const [selected, setSelected] = useState(null);

    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response=>response.json())
        .then(data=> {
            const mappedCountries = data.map(country => {
                country.visited = false;
                country.wantToVisit = false;
                return country;
            })
            setCountries(mappedCountries)});
    }, []);

    const handleUpdateCountryVisited = (name) => {
        const newCountries = [...countries];
        const countryToUpdate = newCountries.find(country => country.name.common == name);
        countryToUpdate.visited = !countryToUpdate.visited;
        setCountries(newCountries);
    };

    const showCountriesContainer = () => {
        setShow(true);
    };

    const hideCountriesContainer = () => {
        setShow(false);
    };

    const setSelectedContinent = (clickedContinent) => {
        setSelected(clickedContinent)
    }

    const showVisitedCountriesContainer = () => {
        setVisitedShow(true)
    }

    const hideVisitedCountriesContainer = () => {
        setVisitedShow(false)
    }

   

    return(
        <div>
            <button className="globalButton" onClick={() => {showVisitedCountriesContainer()}}>Visited Countries</button>
            <button className="globalButton">Want to visit</button>
            <p>Select a continent to see list of countries</p>
            <VisitedCountriesContainer countries={countries} visitedShow={visitedShow} handleClose={hideVisitedCountriesContainer} handleUpdateCountryVisited={handleUpdateCountryVisited}/>
            <CountriesContainer show={show} handleClose={hideCountriesContainer}  selectedContinent={selected} countries={countries} handleUpdateCountryVisited={handleUpdateCountryVisited}/>
            <div className="ContinentList">
            <ContinentList  continents={continents} showCountriesContainer={showCountriesContainer} setSelectedContinent={setSelectedContinent}/>
            </div>
        </div>
    );

}

export default Dashboard