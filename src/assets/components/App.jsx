import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch default recipes
  useEffect(() => {
    const fetchDefaultRecipes = async () => {
      const types = ["spaghetti"];
      let allMeals = [];

      for (let type of types) {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${type}`
        );
        const data = await res.json();
        if (data.meals) {
          allMeals = [...allMeals, ...data.meals];
        }
      }

      setRecipes(allMeals);
    };

    fetchDefaultRecipes();
  }, []);

  const searchRecipes = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setRecipes(data.meals || []);
    setQuery("");
    setLoading(false);
  };

  // Fetch category
  const fetchCategory = async (type) => {
    setLoading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${type}`
    );
    const data = await res.json();
    setRecipes(data.meals || []);
    setLoading(false);
  };

  return (
    <div className="bg-gray-100">
      {/* Parallax Hero */}
      <div
        className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url("/hero.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-position 0.1s",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Recipe Finder</h1>
        <p className="text-lg md:text-xl mb-6">
          Discover amazing meals from around the world!
        </p>

        <form onSubmit={searchRecipes} className="flex w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for a recipe..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border border-gray-300 text-black rounded-l-full px-4 py-3 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-r-full hover:bg-orange-600 transition"
          >
            Search
          </button>
        </form>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {["Chicken", "Pasta", "Dessert", "Beef"].map((cat) => (
            <button
              key={cat}
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
              onClick={() => fetchCategory(cat.toLowerCase())}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 -mt-24">
        {loading && (
          <p className="text-center col-span-full text-gray-500">
            Loading recipes...
          </p>
        )}

        {!loading && recipes.length > 0
          ? recipes.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="rounded-lg mb-3 w-full h-40 object-cover"
                />
                <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
                <p className="text-sm text-gray-600 mb-2">{meal.strArea}</p>
                <p className="text-sm text-gray-500 mb-3">
                  {meal.strIngredient1}, {meal.strIngredient2},{" "}
                  {meal.strIngredient3}…
                </p>
                <a
                  href={meal.strSource || meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline text-sm"
                >
                  View Recipe →
                </a>
              </div>
            ))
          : !loading && (
              <p className="text-center col-span-full text-gray-500">
                No recipes found.
              </p>
            )}
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500 mb-6">
        Built with ❤️ by Queen Lilian
      </footer>
    </div>
  );
}

export default App;
