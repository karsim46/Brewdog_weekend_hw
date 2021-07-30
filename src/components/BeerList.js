import React from "react";
import BeerSelector from "./BeerSelector";
import ListItem from "./ListItem";

const BeerList = ({beers}) => {

    const beerItems = beers.map((beer, id) => {
        return <ListItem beer={beer} key={id} />
        // onBeerClick={onBeerClick}/>
    })

    return(
        <>
        <p>im a beer list</p>
          <ul> {beerItems} </ul>
        {/* <BeerSelector /> */}
        </>

    )

}

export default BeerList; 