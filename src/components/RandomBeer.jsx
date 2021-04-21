import React, { useState } from 'react';

// import BeerCard from '../../../useState/src/components/BeerCard';
import BeerDetails from './BeerDetails';

import './RandomBeer.css';

function RandomBeer() {
  const [beer, setBeer] = useState();

  const fetchBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBeer(data[0]);
      });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <input className="RandomBeer-button  text-4xl mb-10" type="button" value="GET BEER" onClick={fetchBeer} />

      {beer && (
        <BeerDetails
          name={beer.name}
          abv={beer.abv}
          ibu={beer.ibu}
          description={beer.description}
          tagline={beer.tagline}
          ingredients={beer.ingredients}
        />
      )}
    </div>
  );
}

export default RandomBeer;
