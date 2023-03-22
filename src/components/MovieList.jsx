import { Link } from "react-router-dom";
import { Container, CardWrapper, MovieName } from "./MovieList.styled";

export const MovieList = ({ movies }) => {
  return (
    <Container>
      {movies.map((movie) => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <MovieName>{movie.name}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
