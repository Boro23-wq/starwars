import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Person from './Person';

const fetchPeople = async ({ queryKey }) => {
  const [_key, { page }] = queryKey;
  const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

const People = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['People', { page }], fetchPeople);

  return (
    <div>
      <h2>People</h2>

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
          Loading People... Please be patient!
        </div>
      )}
      {status === 'error' && (
        <div style={{ marginTop: '20px' }}>Uh Oh! Error loading people...</div>
      )}

      {status === 'success' && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
