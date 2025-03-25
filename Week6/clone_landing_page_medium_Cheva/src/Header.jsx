function Header() {
  return (
    <>
      <header className="border-b">
        <div className="max-w-5xl mx-auto py-4 flex items-center justify-between">
          <h1 className="font-bold text-3xl font-serif">Medium</h1>
          <div className="flex space-x-3 items-center">
            <nav className="space-x-3 text-xs">
              <a href="" className="hidden md:inline-block font-serif">
                Our Story
              </a>
              <a href="/" className="hidden md:inline-block font-serif">
                Membership
              </a>
              <a href="/" className="hidden md:inline-block font-serif">
                Write
              </a>
              <a href="/" className="hidden sm:inline-block font-serif">
                Sign in
              </a>
            </nav>
            <button className="bg-black text-white text-xs rounded-full py-2 px-4 font-bold cursor-pointer">
              Get started
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
