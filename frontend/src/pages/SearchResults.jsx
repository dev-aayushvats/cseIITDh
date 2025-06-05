import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { slugMap } from '../components/Topbar/Topbar';

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState(null); // Changed to null to match Topbar's initial state
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) {
        setSearchResults(null); // Changed to null
        return;
      }

      try {
        const endpoint = `https://cse.iitdh.ac.in/strapi/api/fuzzy-search/search?query=${encodeURIComponent(query)}`;
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSearchResults(data); // Store data as received, grouped by category
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults(null);
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleResultClick = (category, itemSlug) => {
    const targetSlug = slugMap[category] || itemSlug;
    navigate(`/${targetSlug}`);
  };

  return (
    <div className="p-4 pt-20 px-8">
      <h1 className="text-2xl font-semibold mb-4">Search Results for: "{query}"</h1>
      
      {searchResults && Object.keys(searchResults).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(searchResults).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-xl font-semibold mb-3 capitalize">{category.replace(/_/g, ' ')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                    <button
                      onClick={() => handleResultClick(category, item.slug)}
                      className="w-full text-left text-blue-600 hover:underline focus:outline-none"
                    >
                      <h3 className="font-medium text-lg truncate mb-1">
                        {category === 'peoples' ? 
                          <>{item.Name} {item.Designation && `- ${item.Designation}`}</>
                          : category === 'about-pages' ?
                          item.Title
                          : 
                          item.Title
                        }
                      </h3>
                    </button>
                    {item.content && <p className="text-gray-700 text-sm line-clamp-2">{item.content}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
}

export default SearchResults;
