import React from "react";
import BeerContainer from "../containers/BeerContainer";

const BeerDetail = ({selectedBeer}) => {
    return (

        <div>
            <h3>{selectedBeer.name}</h3>
        </div>
    )
}

export default BeerDetail;