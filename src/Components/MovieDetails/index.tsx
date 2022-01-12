import { Movie } from './../../dataStructure';

type MovieDetailsProps = {
  movie: Movie | null;
};

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  // * Create array with 5 item and map into for create rating
  function fillArrayWithNumbers(n: number) {
    let arr = Array.apply(null, Array(5));
    return arr.map(function (x, index) {
      return (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 ${n > index ? 'text-sky-400' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    });
  }

  // * Calculate rating
  const rating = movie ? Math.round(movie?.vote_average / 2) : 0;

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
          <div className="flex">{fillArrayWithNumbers(rating)} / 5</div>
        </div>
      </div>
      <p className="text-lg">{movie?.overview}</p>
    </div>
  );
  const MovieDetailsDefaultJSX = (
    <div className="text-center pt-10">
      <h2>Choose a movie</h2>
    </div>
  );
  return <div className="">{movie ? MovieDetailsJSX : MovieDetailsDefaultJSX}</div>;
};
