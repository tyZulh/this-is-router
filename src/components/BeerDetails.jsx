import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BeerDetails(props) {
  const params = useParams();
  const [beer, setBeer] = useState();

  useEffect(() => {
    if (props.name) {
      setBeer(props);
    }
  }, [props]);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/' + params.id)
      .then((res) => res.json())
      .then((data) => setBeer(data[0]));
  }, []);

  return (
    <>
      {beer && (
        <div className="w-full flex justify-center  align-center h-full">
          <div className="BeerDetails-card w-4/12 flex flex-col align-center border-solid border-2 p-4">
            <h2 className="text-2xl text-center mb-2">{beer.name}</h2>

            <span className="text-center mb-4">{`"${beer.tagline}"`}</span>

            <p className="text-center">{beer.description}</p>

            <div className="flex flex-wrap justify-around p-4">
              <h3 className="text-xl w-full text-center mb-4 mt-4">Ingredients</h3>

              <div>
                <span className="font-semibold">Malts :</span>
                {beer.ingredients.malt.map((malt, index) => {
                  return <p key={index}>{malt.name}</p>;
                })}
              </div>

              <div>
                <span className="font-semibold">Hops :</span>
                {beer.ingredients.hops.map((hop, index) => {
                  return <p key={index}>{hop.name}</p>;
                })}
              </div>
            </div>

            <div className="flex justify-between p-4">
              <span>ABV : {beer.abv}</span>

              <span>IBU : {beer.ibu}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BeerDetails;
