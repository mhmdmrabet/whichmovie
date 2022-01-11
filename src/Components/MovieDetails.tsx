import { Movie } from '../dataStructure';

type MovieDetailsProps = {
  movie: Movie | null;
};

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const MovieDetailsJSX = (
    <div className="p-8 space-y-4 text-2xl">
      <div className="flex space-x-4">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie?.title}
          className="w-48"
        />
        <div className="space-y-4">
          <h2>{movie?.title}</h2>
          <h3>{movie?.vote_average} / 5</h3>
        </div>
      </div>
      <p className="text-lg">{movie?.overview}</p>
    </div>
  );
  const MovieDetailsDefaultJSX = <h2>Choose a movie</h2>;
  return <div className="">{movie ? MovieDetailsJSX : MovieDetailsDefaultJSX}</div>;
};
