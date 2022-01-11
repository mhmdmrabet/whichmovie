import { Movie } from './Movie';

export const Movies = (): JSX.Element => {
  return (
    <div className="bg-amber-600 basis-11/12">
      <ul className="m-4 p-1 bg-amber-400">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </ul>
    </div>
  );
};
