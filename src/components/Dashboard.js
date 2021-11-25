import React, { useState } from "react";
import CountriesContainer from "../containers/CountriesContainer";
import ContinentList from "./continents/ContinentList"
import continents from './continents/continents.js'
import './continents/Continent.css'
import VisitedCountriesContainer from "../containers/VistedCountriesContainer"

const Dashboard = () =>{
    const [show, setShow] = useState(false);
    const [visitedShow, setVisitedShow] = useState(false)
    const [selected, setSelected] = useState(null);

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
            <button className="globalButton">Visited Countries</button>
            <button className="globalButton">Want to visit</button>
            <p>Select a continent to see list of countries</p>
            <VisitedCountriesContainer visitedShow={visitedShow} handleClose={hideVisitedCountriesContainer}/>
            <CountriesContainer show={show} handleClose={hideCountriesContainer}  selectedContinent={selected} />
            <div className="ContinentList">
            <ContinentList  continents={continents} showCountriesContainer={showCountriesContainer} setSelectedContinent={setSelectedContinent}/>
            </div>
        </div>
    );

}

export default Dashboard