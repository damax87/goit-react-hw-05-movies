import { useEffect, useState } from "react";
import * as API from "../API";
import { TrendingList } from "components/TrendingList";

const Home = () => {

  const useTrendingList = () => {
    const [trendingMovies, setMovies] = useState([]);
  
    useEffect(() => {
      API.getTrending().then(response => setMovies(response));
    }, []);
  
    return { trendingMovies };
  };  
  const { trendingMovies }  = useTrendingList();
  return (
    <div>
      <TrendingList movies={trendingMovies} />
    </div>
  );}
  export default Home;