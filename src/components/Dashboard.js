import React, { useState } from "react";
import CountriesContainer from "../containers/CountriesContainer";
import ContinentList from "./ContinentList"
import continents from './continents.js'
import './Continent.css'

const Dashboard = () =>{
    const [show, setShow] = useState(false);

    const showCountriesContainer = () => {
        setShow(true);
    };

    const hideCountriesContainer = () => {
        setShow(false);
    };
    const fillOnHover = (id) => {
        const continentToUpdate = continents.find(continent => continent.id === id);
        continentToUpdate.filled = true;
    }

    return(
        <div>
            <CountriesContainer show={show} handleClose={hideCountriesContainer} />
            <div className="ContinentList">
            <ContinentList  fillOnHover={fillOnHover}/>
            </div>
        </div>
    );

}

export default Dashboard