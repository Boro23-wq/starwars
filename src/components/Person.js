import React from 'react';

const Person = ({ person }) => {
  return (
    <div className='card'>
      <h3>{person.name}</h3>
      <p>
        <b>Gender</b> - {person.gender}
      </p>
      <p>
        <b>Skin Color</b> - {person.skin_color}
      </p>
      <p>
        <b>Eye Color</b> - {person.eye_color}
      </p>
      <p>
        <b>Mass</b> - {person.mass}
      </p>
      <p>
        <b>Birth Year</b> - {person.birth_year}
      </p>
    </div>
  );
};

export default Person;
