import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://nonskuy-backend.vercel.app/api/movie").then((res) => {
      setMovies(res.data.data.movies);
    });
  }, []);

  return (
    <main className="bg-[#0B1A38] min-h-screen px-36 py-10">
      <h1 className="text-2xl text-white font-bold mb-6">List Movie</h1>
      <div className="grid grid-cols-6 gap-4">
        {movies.length === 0 ? (
          <p className="text-white text-lg">Tidak ada film ditemukan.</p>
        ) : (
          movies.map((movie, index) => <MovieCard key={index} data={movie} />)
        )}
      </div>
    </main>
  );
}
