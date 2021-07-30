import React, {useState, useEffect} from 'react';
import BeerList from '../components/BeerList';
import BeerSelector from '../components/BeerSelector';
import BeerDetail from '../components/BeerDetail';

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect (() => {
      getBeers();
    },[])

    const getBeers = function (){
        
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    // const onBeerClick = function(beer){
    //   setSelectedBeer(beer);
    // }

    const onBeerSelected = function(beer){
      setSelectedBeer(beer);
    }

    return (
        <div className="main-container">
       
        {/* <BeerList beers = {beers} onBeerClick={onBeerClick}/>  */}
        <BeerSelector beers={beers} onBeerSelected={onBeerSelected}/>
        {selectedBeer ? <BeerDetail selectedBeer={selectedBeer}/> :null}
        </div>
    );



}
export default BeerContainer;
  