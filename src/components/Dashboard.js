import React, { useState } from "react";
import CountriesContainer from "../containers/CountriesContainer";
import ContinentList from "./ContinentList"
import continents from './continents.js'
import './Continent.css'

const Dashboard = () =>{
    const [show, setShow] = useState(false);
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

   

    return(
        <div>
            <CountriesContainer show={show} handleClose={hideCountriesContainer}  selectedContinent={selected} />
            <div className="ContinentList">
            <ContinentList  continents={continents} showCountriesContainer={showCountriesContainer} setSelectedContinent={setSelectedContinent}/>
            </div>
        </div>
    );

}

export default Dashboard