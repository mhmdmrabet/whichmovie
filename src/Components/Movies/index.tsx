import { MovieListType } from '../../dataStructure';

type MoviesProps = {
  movies: MovieListType;
  onClickMovie: Function;
};

export const Movies: React.FC<MoviesProps> = ({ movies, onClickMovie }) => {
  const handlClick = (id: number) => {
    onClickMovie(id);
  };
  return (
    <div className="bg-amber-600 basis-11/12 overflow-y-auto no-scrollbar">
      <ul>
        {movies.map((movie) => {
          return (
            <li
              key={movie.id}
              onClick={() => handlClick(movie.id)}
              className="m-2 p-1 text-xl border-b-2 border-white"
            >
              {movie.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
