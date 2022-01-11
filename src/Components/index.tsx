import { MovieDetails } from './MovieDetails';
import { Movies } from './Movies';
import { SearchBar } from './SearchBar';
import moviesData from './../data/movies.json';
import { useEffect, useState } from 'react';
import { Movie, MovieListType } from '../dataStructure';

function App(): JSX.Element {
  const APP_KEY = import.meta.env.VITE_API_KEY;
  console.log(APP_KEY);

  const [movies, setMovies] = useState<MovieListType>([]);
  const [filteredResults, setFilteredResults] = useState<MovieListType | []>([]);
  const [searchInput, setSearchInput] = useState('');

  const searchMovies = (event: React.FormEvent<HTMLInputElement>): void => {
    const keyword = event.currentTarget.value;
    setSearchInput(keyword);
    if (keyword !== '') {
      console.log({ keyword });

      const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredResults(filteredMovies);
    }
  };

  useEffect(() => {
    setMovies(moviesData.results);
  }, []);

  return (
    <div className="text-3xl font-bold flex h-screen">
      <div className="w-1/3 flex flex-col">
        <SearchBar onChangeInputValue={searchMovies} searchValue={searchInput} />
        <Movies movies={searchInput ? filteredResults : movies} />
      </div>
      <div className="bg-amber-700 w-2/3">
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
