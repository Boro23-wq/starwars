import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets/');
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery('Planets', fetchPlanets);

  console.log(data);
  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && <div>Loading Planets... Please be patient!</div>}
      {status === 'error' && <div>Uh Oh! Error loading planets...</div>}
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
