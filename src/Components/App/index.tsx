import { useQuery } from 'react-query';
import { MovieDetails } from './../MovieDetails';
import { Movies } from '../Movies';
import { SearchBar } from '../SearchBar';
import moviesData from '../../data/movies.json';
import { useState } from 'react';
import { Movie, MovieListType } from '../../dataStructure';
import { APP_KEY, BASE_URL } from '../../api/utils';

function App(): JSX.Element {
  const [movies, setMovies] = useState<MovieListType>([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // * Find Movies by title & setMovies on success
  const findMovies = useQuery(
    'searchMovies',
    async (): Promise<MovieListType> => {
      const result = await fetch(
        `${BASE_URL}/search/movie?sort_by=popularity.desc&api_key=${APP_KEY}&query=${searchInput}`
      );
      return result.json();
    },
    {
      onSuccess: (data: { results: MovieListType }): void => {
        setMovies(data.results);
      },
      enabled: false,
    }
  );

  // * Fetch movies by popularity & onSuccess setMovies
  const fetchFirstMovies = useQuery(
    'movies',
    async (): Promise<MovieListType> => {
      const result = await fetch(
        `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${APP_KEY}`
      );
      return result.json();
    },
    {
      onSuccess: (data: { results: MovieListType }): void => {
        setMovies(data.results);
        setSelectedMovie(movies[0]);
      },
      onError: (): void => {
        setMovies(moviesData.results);
      },
    }
  );

  // * SetState & Launch a search when the user writes in the search bar
  const searchMovies = (event: React.FormEvent<HTMLInputElement>): void => {
    const keyword = event.currentTarget.value;
    setSearchInput(keyword);
    if (searchInput.length > 1) {
      findMovies.refetch();
    } else {
      fetchFirstMovies.refetch();
    }
  };

  // * Change the selected movie when user clicks in the movie list
  const selectMovie = (id: number) => {
    const movie = movies.find((item) => item.id === id)!;
    setSelectedMovie(movie);
  };

  return (
    <div className="text-3xl flex h-screen bg-blue-100 text-gray-600">
      <div className="w-1/3 flex flex-col border-r-2 border-blue-50 my-2">
        <SearchBar onChangeInputValue={searchMovies} searchValue={searchInput} />
        {fetchFirstMovies.isLoading ? (
          <h2 className="flex justify-center align-center">Loading ...</h2>
        ) : (
          <Movies onClickMovie={selectMovie} movies={movies} />
        )}
      </div>
      <div className="w-2/3">
        <MovieDetails movie={selectedMovie} />
      </div>
    </div>
  );
}

export default App;
