import { MovieDetails } from './MovieDetails';
import { Movies } from './Movies';
import { SearchBar } from './SearchBar';

function App(): JSX.Element {
  return (
    <div className="text-3xl font-bold">
      <SearchBar />
      <Movies />
      <MovieDetails />
    </div>
  );
}

export default App;
