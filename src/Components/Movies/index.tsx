import { Movie } from './Movie';

type MoviesProps = {
  movies: {
    id: number;
    title: string;
  }[];
};

export const Movies = ({ movies }: MoviesProps): JSX.Element => {
  return (
    <div className="bg-amber-600 basis-11/12 overflow-y-auto no-scrollbar">
      <ul className="">
        {movies.map(({ id, title }) => {
          return <Movie key={id} title={title} />;
        })}
      </ul>
    </div>
  );
};
