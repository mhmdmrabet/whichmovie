import { Movie } from '../../../dataStructure';

type MovieProps = {
  movie: Movie;
};

export const Item: React.FC<MovieProps> = ({ movie }) => {
  return <li className="m-2 p-1 text-xl border-b-2 border-white">{movie.title}</li>;
};
