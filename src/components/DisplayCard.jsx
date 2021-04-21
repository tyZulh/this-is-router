import React, { useEffect, useState } from 'react';

import BeerCard from './BeerCard';

function DisplayCard() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
      {beers.map((beer) => {
        return <BeerCard key={beer.id} name={beer.name} description={beer.description} abv={beer.abv} ibu={beer.ibu} id={beer.id} />;
      })}
    </div>
  );
}

export default DisplayCard;
