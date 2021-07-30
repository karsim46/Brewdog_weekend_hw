import React from 'react';


const BeerSelector = ({beers, onBeerSelected}) => {

    const handleChange = function(event) {
        const chosenBeer = beers[event.target.value];
        onBeerSelected(chosenBeer);
    }

    const beerOptions = beers.map((beer, id) => {
        return <option value ={id} key={id}>{beer.name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value = "" selected>Choose a Beer</option>
            {beerOptions}
        </select>

      
    )

}

export default BeerSelector