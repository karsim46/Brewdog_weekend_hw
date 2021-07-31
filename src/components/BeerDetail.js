import React from "react";
// import BeerContainer from "../containers/BeerContainer";

const BeerDetail = ({selectedBeer, onFavouriteToggle}) => {

    if (!selectedBeer) {
        return null
    }
    const handleClick = () => {
        onFavouriteToggle(selectedBeer.id)
    }  

    const favouriteBtnText = selectedBeer.favourite ? 'Remove from favourites' : 'Add to favourites'


    return (

        <div>
            <h3>{selectedBeer.name}</h3><button onClick={handleClick}>{favouriteBtnText}</button>
            <h5>{selectedBeer.description}</h5>
            <h3>{selectedBeer.tagline}</h3>
            <img src= {selectedBeer.image_url} width="150" height="400"></img>
           
            
        </div>
    )
}

export default BeerDetail;