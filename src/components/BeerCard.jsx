import React from 'react';
import { useHistory } from 'react-router-dom';

function BeerCard({ name, abv, ibu, description, id }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/beer/${id}`);
  };

  return (
    <div
      className="flex flex-col w-80 border-solid  border-current border p-4 h-80 justify-between mt-4"
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}>
      <h3 className="text-2xl font-color-white font-semibold text-center">{name}</h3>
      <p className="mt-4 overflow-auto">
        <span className="font-semibold">Description : </span>
        {description}
      </p>
      <div className="flex justify-around mt-4">
        <span className="font-semibold">ABV : {abv}</span>
        <span className="font-semibold">IBU : {ibu}</span>
      </div>
    </div>
  );
}

export default BeerCard;
