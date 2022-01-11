import { useQuery } from 'react-query';
import { MovieDetails } from './MovieDetails';
import { Movies } from './Movies';
import { SearchBar } from './SearchBar';
import moviesData from '../data/movies.json';
import { useState } from 'react';
import { Movie, MovieListType } from '../dataStructure';

function App(): JSX.Element {
  const APP_KEY = import.meta.env.VITE_API_KEY || null;

  const [movies, setMovies] = useState<MovieListType>([]);
  const [filteredResults, setFilteredResults] = useState<MovieListType | []>([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const fetchMovies = async (): Promise<MovieListType> => {
    const result = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APP_KEY}`
    );
    return result.json();
  };

  const onSuccess = (data: { results: MovieListType }) => {
    setMovies(data.results);
  };

  const onError = () => {
    setMovies(moviesData.results);
  };

  const { isLoading } = useQuery('movies', fetchMovies, { onSuccess, onError });

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
    <div className="text-3xl font-bold flex h-screen">
      <div className="w-1/3 flex flex-col border-r-2 border-black">
        <SearchBar onChangeInputValue={searchMovies} searchValue={searchInput} />
        {isLoading ? (
          <h2 className="flex justify-center align-center">Loading ...</h2>
        ) : (
          <Movies onClickMovie={selectMovie} movies={searchInput ? filteredResults : movies} />
        )}
      </div>
      <div className="w-2/3">
        <MovieDetails movie={selectedMovie} />
      </div>
    </div>
  );
}

export default App;
