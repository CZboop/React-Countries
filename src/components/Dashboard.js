import React, { useState } from "react";
import CountriesContainer from "../containers/CountriesContainer";

const Dashboard = () =>{
    const [show, setShow] = useState(false);

    const showCountriesContainer = () => {
        setShow(true);
    };

    const hideCountriesContainer = () => {
        setShow(false);
    };

    return(
        <div>
            <CountriesContainer show={show} handleClose={hideCountriesContainer}/>
            <button type="button" onClick={showCountriesContainer}>
            Open
            </button>
        </div>
    );

}

export default Dashboard