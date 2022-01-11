import { MovieDetails } from './MovieDetails';
import { Movies } from './Movies';
import { SearchBar } from './SearchBar';
import moviesData from './../data/movies.json';

function App(): JSX.Element {
  const { results } = moviesData;

  return (
    <div className="text-3xl font-bold flex h-screen">
      <div className="w-1/3 flex flex-col">
        <SearchBar />
        <Movies movies={results} />
      </div>
      <div className="bg-amber-700 w-2/3">
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
