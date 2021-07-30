import React from 'react';


const ListItem = ({beer}) => {
  const handleClick = function(){
       console.log(`Clicked on ${beer}`)
    
}
return <li onClick={handleClick}>{beer.name}</li>
}

export default ListItem;