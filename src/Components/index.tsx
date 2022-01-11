import { MovieDetails } from './MovieDetails';
import { Movies } from './Movies';
import { SearchBar } from './SearchBar';
import moviesData from './../data/movies.json';
import { useEffect, useState } from 'react';
import { Movie, MovieListType } from '../dataStructure';

function App(): JSX.Element {
  const [movies, setMovies] = useState<MovieListType>([]);

  useEffect(() => {
    setMovies(moviesData.results);
  }, []);

  return (
    <div className="text-3xl font-bold flex h-screen">
      <div className="w-1/3 flex flex-col">
        <SearchBar />
        <Movies movies={movies} />
      </div>
      <div className="bg-amber-700 w-2/3">
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
