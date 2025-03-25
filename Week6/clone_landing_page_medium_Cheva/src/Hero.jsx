function Hero() {
  return (
    <>
      <div className="flex flex-col items-start max-w-6xl mx-auto py-30 px-6 lg:px-12">
        <h1 className="text-8xl font-serif">Human</h1>
        <h1 className="text-8xl font-serif">stories & ideas</h1>
        <p className="text-xl mt-5 py-5">
          A place to read, write, and deepen your understanding
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-800 cursor-pointer">
          Start reading
        </button>
      </div>
    </>
  );
}

export default Hero;
