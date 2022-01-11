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
    <div className="basis-11/12 overflow-y-auto no-scrollbar">
      <ul>
        {movies.map((movie) => {
          return (
            <li
              key={movie.id}
              onClick={() => handlClick(movie.id)}
              className="m-2 p-1 text-xl border-b-2 border-blue-700 hover:cursor-pointer"
            >
              {movie.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
