import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import HeroSection from "../components/HeroSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://nonskuy-backend.vercel.app/api/movie/trending")
      .then((res) => {
        const trending = res.data.data.movies;

        if (Array.isArray(trending)) {
          setTrendingMovies(trending);
        } else {
          setTrendingMovies([]);
        }
      })
      .catch((error) => {
        setTrendingMovies([]);
      });
  }, []);

  const heroMovie = trendingMovies[0];

  return (
    <>
      {heroMovie && <HeroSection movie={heroMovie} />}

      <section className="bg-[#0B1A38] text-white px-36 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Trending Movies</h2>
        <div className="grid grid-cols-3 gap-6 justify-center">
          {trendingMovies.slice(1, 4).map((movie, index) => (
            <MovieCard key={index} data={movie} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/movie")}
            className="bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-500 transition"
          >
            See More
          </button>
        </div>
      </section>
    </>
  );
}
