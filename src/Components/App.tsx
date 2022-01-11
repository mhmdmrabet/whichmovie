import { MovieDetails } from './MovieDetails';
import { Movies } from './Movies';
import { SearchBar } from './SearchBar';
import moviesData from '../data/movies.json';
import { useEffect, useState } from 'react';
import { Movie, MovieListType } from '../dataStructure';

function App(): JSX.Element {
  const APP_KEY = import.meta.env.VITE_API_KEY;

  const [movies, setMovies] = useState<MovieListType>([]);
  const [filteredResults, setFilteredResults] = useState<MovieListType | []>([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovies(moviesData.results);
  }, []);

  const searchMovies = (event: React.FormEvent<HTMLInputElement>): void => {
    const keyword = event.currentTarget.value;
    setSearchInput(keyword);
    if (keyword !== '') {
      const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredResults(filteredMovies);
    }
  };

  const selectMovie = (id: number) => {
    const movie = movies.find((item) => item.id === id)!;
    setSelectedMovie(movie);
  };

  return (
    <div className="text-3xl font-bold flex h-screen bg-slate-400">
      <div className="w-1/3 flex flex-col border-r-2 border-black">
        <SearchBar onChangeInputValue={searchMovies} searchValue={searchInput} />
        <Movies onClickMovie={selectMovie} movies={searchInput ? filteredResults : movies} />
      </div>
      <div className="w-2/3">
        <MovieDetails movie={selectedMovie} />
      </div>
    </div>
  );
}

export default App;
