import React from "react";
// import BeerContainer from "../containers/BeerContainer";

const BeerDetail = ({selectedBeer}) => {
    return (

        <div>
            <h3>{selectedBeer.name}</h3>
            <h5>{selectedBeer.description}</h5>
            <h3>{selectedBeer.tagline}</h3>
            <img src= {selectedBeer.image_url} width="400" height="400"></img>
            
        </div>
    )
}

export default BeerDetail;