import { Movie } from '../dataStructure';

type MovieDetailsProps = {
  movie: Movie | null;
};

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const MovieDetailsJSX = <h2>{movie?.title}</h2>;
  const MovieDetailsDefaultJSX = <h2>Choose a movie</h2>;
  return <div className="">{movie ? MovieDetailsJSX : MovieDetailsDefaultJSX}</div>;
};
