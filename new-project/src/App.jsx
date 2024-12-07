import React from "react";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {}
          <div className="flex items-center space-x-4">
            <img
              src="https://a10.gaanacdn.com/images/section/logo_1724226700.svg"
              alt="Logo"
              className="h-10"
            />
            <input
              type="text"
              placeholder="Search Artists, Songs, Albums"
              className="hidden md:block border border-gray-300 rounded-lg px-3 py-2 text-sm w-96 focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>

          {}
          <div className="flex items-center space-x-6">
            <button className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-red-600 transition">
              Get Gaana Plus
            </button>
            <button className="text-gray-700 hover:text-red-500 transition">
              Log In / Sign Up
            </button>
          </div>
        </div>
      </header>

      {}
      <main className="container mx-auto px-4 py-6">
        {}
        <nav className="flex flex-wrap space-x-4 text-sm font-medium border-b border-gray-300 pb-3">
          {["All", "Trending Songs", "New Songs", "Old Songs", "Moods & Genres", "Album", "Top Playlist", "Top Artist", "Radio", "Podcast"].map(
            (category) => (
              <a
                href="#"
                key={category}
                className="hover:text-red-500 transition"
              >
                {category}
              </a>
            )
          )}
        </nav>

        {}
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src="./public/img1.jpg"
              alt="Featured 1"
              className="w-full hover:opacity-50 "
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Bhakti Top 50</h3>
              <p className="text-sm text-gray-600 mt-1">Punjabi devotional songs</p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src="./public/img2.jpg"
              alt="Featured 2"
              className="w-full hover:opacity-50 "
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Sadhguru Special</h3>
              <p className="text-sm text-gray-600 mt-1">Inspirational talks and music</p>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src="./public/img3.jpg"
              alt="Featured 3"
              className="w-full hover:opacity-50 "
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Meditation</h3>
              <p className="text-sm text-gray-600 mt-1">Spiritual and enlightening</p>
            </div>
          </div>
        </section>

        {}
        <section className="mt-8 bg-gradient-to-r from-red-500 to-purple-600 text-white text-center py-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Get 1 Month Trial for Just ₹1</h2>
          <p className="text-sm mt-2">
            Enjoy Ad-Free Music, HD Quality Audio, and Unlimited Downloads
          </p>
          <button className="bg-white text-red-500 px-6 py-2 mt-4 rounded-lg hover:bg-red-100 transition">
            Start Trial Now
          </button>
        </section>

        {}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">Top Trending</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`s${index +
                    1}.jpg`}
                  alt={`Chart ${index + 1}`}
                  className="w-full hover:opacity-50 "
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {}
      <footer className="bg-gray-800 text-gray-400 py-6 mt-12">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2024 Gaana Clone. All rights reserved.</p>
          <p>Powered by React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;