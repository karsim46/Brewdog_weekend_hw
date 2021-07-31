

const FavouriteBeers = ({ beers, onBeerSelected}) => {

    const favouriteBeers = beers.filter(beer => beer.favourite)

    return (

        <>
        <h3>Favourite Beers:</h3>
        <ul>
            {favouriteBeers.map(beer => {
                return (
                    <li id={beer.id}>
                        <button onClick = {() => onBeerSelected(beer.id)}>{beer.name}</button>
                    </li>
                )
            })}
        </ul>
       </>

    )
}

export default FavouriteBeers