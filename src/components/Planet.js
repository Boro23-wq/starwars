import React from 'react';

const Planet = ({ planet }) => {
  console.log(planet);
  return (
    <div className='card'>
      <h3>{planet.name}</h3>
      <p>
        <b>Population</b> - {planet.population}
      </p>
      <p>
        <b>Terrain</b> - {planet.terrain}
      </p>
      <p>
        <b>Climate</b> - {planet.climate}
      </p>
      <p>
        <b>Orbital Period</b> - {planet.orbital_period}
      </p>
      <p>
        <b>Rotation Period</b> - {planet.rotation_period}
      </p>
    </div>
  );
};

export default Planet;
