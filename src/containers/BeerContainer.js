import React, {useState, useEffect} from 'react';
import BeerList from '../components/BeerList';
import BeerSelector from '../components/BeerSelector';
import BeerDetail from '../components/BeerDetail';
import FavouriteBeers from '../components/FavouriteBeers';

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeerId, setSelectedBeerId] = useState('');

    useEffect (() => {
      getBeers();
    },[])

    const getBeers =  () => {
        
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    
    // const onBeerSelected = function(beer){
    //   setSelectedBeer(beer);
    // }

    const handleBeerSelected = id => {
      setSelectedBeerId(id)
    }

    const handleFavouriteToggle = (id) => {
      const updatedBeers = beers.map((beer) => {
        if (beer.id === id){
          beer.favourite = !beer.favourite
        }
        return beer
      })
      setBeers(updatedBeers)

    }

    const selectedBeer = beers.find(beer => beer.id === selectedBeerId)

    return (
        <div className="main-container">
       
        {/* <BeerList beers = {beers} onBeerClick={onBeerSelected}/>  */}
        <BeerSelector beers={beers} onBeerSelected={handleBeerSelected}/>
        {selectedBeer ? <BeerDetail selectedBeer={selectedBeer} onFavouriteToggle={handleFavouriteToggle}/>:null}
        <FavouriteBeers beers={beers} onBeerSelected={handleBeerSelected} />
        </div>
    );



}
export default BeerContainer;
  