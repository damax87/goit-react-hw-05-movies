import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { Movies } from "../pages/Movies";
import { NotFound } from "../pages/NotFound";
import { Container, Header, Link } from "./App.styled";


// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Container>
      <Header>
      <nav>
        <Link to="/" end>Home</Link>
        <Link to="/movies">Movies</Link>
        {/* <Link to="/movies/:movieId">MovieDetails</Link>
        <Link to="/movies/:movieId/cast">MovieDetailsCast</Link>
        <Link to="/movies/:movieId/reviews">MovieDetailsReviews</Link> */}
      </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieDetails />} />
          <Route path="reviews" element={<MovieDetails />} />
          </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
    </div>
  );
};
