import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Planet from './Planet';

const fetchPlanets = async ({ queryKey }) => {
  const [_key, { page }] = queryKey;

  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);

  const { data, status } = useQuery(['Planets', { page }], fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>

      {status === 'success' && (
        <>
          <button
            disabled={!data.next}
            onClick={() => setPage((page) => page + 1)}
          >
            Next
          </button>
          Page - {page}
          <button
            disabled={!data.previous}
            onClick={() => setPage((page) => page - 1)}
          >
            Previous
          </button>
        </>
      )}

      {status === 'loading' && (
        <div style={{ marginTop: '20px' }}>
          Loading Planets... Please be patient!
        </div>
      )}
      {status === 'error' && (
        <div style={{ marginTop: '20px' }}>Uh Oh! Error loading planets...</div>
      )}
      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
