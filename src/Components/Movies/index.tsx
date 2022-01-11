import { MovieListType } from '../../dataStructure';
import { Item } from './Item';

type MoviesProps = {
  movies: MovieListType;
};

export const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <div className="bg-amber-600 basis-11/12 overflow-y-auto no-scrollbar">
      <ul className="">
        {movies.map((movie) => {
          return <Item key={movie.id} movie={movie} />;
        })}
      </ul>
    </div>
  );
};
