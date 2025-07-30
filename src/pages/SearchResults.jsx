import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { slugMap } from "../components/Topbar/Topbar";

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) {
        setResults(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const endpoint = `https://cse.iitdh.ac.in/strapi/api/fuzzy-search/search?query=${encodeURIComponent(
          query
        )}`;
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setResults(data);
      } catch (err) {
        console.error("Error fetching search results:", err);
        setError("Failed to fetch search results. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleResultClick = (category) => {
    const targetSlug = slugMap[category];
    if (targetSlug) {
      navigate(`/${targetSlug}`);
    } else {
      console.warn(`No slug mapping found for category: ${category}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-6">
        Search Results for: "{query}"
      </h1>

      {loading && <p>Loading search results...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading &&
        !error &&
        (!results || Object.keys(results).length === 0) && (
          <p>No results found for "{query}".</p>
        )}

      {!loading && !error && results && Object.keys(results).length > 0 && (
        <div>
          {Object.entries(results).map(([category, items]) => (
            <div key={category} className="mb-8">
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {category.replace(/_/g, " ")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-100"
                  >
                    <h3 className="font-semibold text-lg mb-1">
                      {category === "peoples"
                        ? item.Name || item.title
                        : item.Title || item.Name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {category === "peoples"
                        ? item.Designation || item.Role
                        : ""}
                    </p>
                    <button
                      onClick={() => handleResultClick(category)}
                      className="text-blue-500 hover:underline text-sm focus:outline-none"
                    >
                      Read more
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
