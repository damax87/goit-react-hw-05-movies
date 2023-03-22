import { MovieList } from "../components/MovieList";
import { getMovies } from "../fakeAPI";

export const Movies = () => {
  const movies = getMovies();
  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
};
