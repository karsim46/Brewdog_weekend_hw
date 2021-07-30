import React, {useState} from 'react';
import BeerList from '../components/BeerList';
import BeerSelector from '../components/BeerSelector';

const BeerContainer = () => {
    const [beers, setBeers] = useState([]);

    const getBeers = function (){
        
         fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
     }


      return (
        <>
        <p>im a container</p>
  
        <BeerList />
        <BeerSelector/>
        </>
    );



}
export default BeerContainer;
  