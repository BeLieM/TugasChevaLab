import React from "react";

export default function HeroSection({ movie }) {
  if (!movie) return null;

  console.log("Hero Movie Data:", movie);

  return (
    <section className="relative bg-gray-800 text-white h-[500px]">
      <img
        src={movie.backdropUri}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 px-36 py-24">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-sm mt-2">
          📅 Year: {new Date(movie.releaseDate).getFullYear()}
        </p>
        <p className="max-w-lg mt-2">{movie.overview}</p>
        <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition">
          See Detail
        </button>
      </div>
    </section>
  );
}
