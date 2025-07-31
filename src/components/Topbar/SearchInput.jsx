import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useDebounce } from "../../hooks/useDebounce";
import useSearchResult from "../../hooks/useSearchResult";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 300); // 300ms delay
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Use the custom hook for search results
  const { data: searchResults, isLoading } = useSearchResult(
    debouncedQuery.trim()
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowResults(true);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowResults(false);
    }
  };

  const handleInputFocus = () => {
    if (
      searchQuery.trim() !== "" &&
      searchResults &&
      Object.keys(searchResults).length > 0
    ) {
      setShowResults(true);
    }
  };

  const handleCloseSearch = () => {
    setSearchQuery("");
    setShowResults(false);
  };

  const handleResultClick = (slug) => {
    navigate(`/${slug}`);
    handleCloseSearch();
  };

  const handleInputBlur = () => {
    setShowResults(false);
    // setTimeout(() => {
    //   if (
    //     !resultsRef.current ||
    //     !resultsRef.current.contains(document.activeElement)
    //   ) {
    //     setShowResults(false);
    //   }
    // }, 100);
  };

  return (
    <div className="hidden sm:block relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleSearchKeyDown}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        aria-label="Search"
        className="py-[0.4rem] px-[0.8rem] border border-[#e0e0ff] rounded-full text-[0.85rem] bg-white/70 w-[150px] md:w-[180px] transition-all duration-200 focus:outline-none focus:border-[#d0d0ff] focus:shadow focus:shadow-[#d0d0ff]/40 focus:w-[200px]"
      />

      {/* Minimal search results dropdown */}
      {showResults && (
        <SearchResultDropdown
          debouncedQuery={debouncedQuery}
          isLoading={isLoading}
          searchQuery={searchQuery}
          searchResults={searchResults}
          handleResultClick={handleResultClick}
        />
      )}
    </div>
  );
}

function SearchResultDropdown({
  debouncedQuery,
  isLoading,
  searchQuery,
  searchResults,
  handleResultClick,
}) {
  const resultsRef = useRef(null);

  if (debouncedQuery?.trim() === "") {
    return null;
  }

  if (isLoading || searchQuery !== debouncedQuery) {
    return (
      <div className="absolute top-[calc(100%+4px)] right-0 bg-white border border-gray-100 rounded-lg shadow-lg z-50 w-[320px] max-h-[400px] overflow-hidden flex flex-col items-center justify-center py-10">
        <div className="flex flex-col items-center justify-center w-full p-5">
          <svg
            className="animate-spin w-10 h-10 text-indigo-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <title>Loading...</title>
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span className="text-lg font-semibold text-indigo-600 mb-1">
            Searching...
          </span>
          <span className="text-sm text-gray-500">
            Looking for results for{" "}
            <span className="font-medium text-gray-800">
              "{searchQuery.trim()}"
            </span>
          </span>
        </div>
      </div>
    );
  }

  if (!searchResults) {
    return (
      <div className="absolute top-[calc(100%+4px)] right-0 bg-white border border-gray-100 rounded-lg shadow-lg z-50 w-[320px] max-h-[400px] overflow-hidden flex flex-col items-center justify-center py-10">
        <div className="flex flex-col items-center justify-center w-full p-4">
          <svg
            className="w-12 h-12 text-gray-300 mb-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <title>Not found</title>
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="21"
              y1="21"
              x2="16.65"
              y2="16.65"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="8.5"
              y1="10.5"
              x2="13.5"
              y2="10.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-lg font-semibold text-gray-700 mb-1">
            No results found
          </span>
          <span className="text-sm text-gray-500 mb-2">
            We couldn't find any results for{" "}
            <span className="font-medium text-gray-800">
              "{searchQuery.trim()}"
            </span>
          </span>
          <span className="text-xs text-gray-400 text-center">
            Please try a different keyword.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={resultsRef}
      className="absolute top-[calc(100%+4px)] right-0 bg-white border border-gray-100 rounded-lg shadow-lg z-50 w-[320px] max-h-[400px] overflow-hidden"
    >
      {/* Clean header */}
      <div className="px-4 py-2 border-b border-gray-50 bg-gray-50/50">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          Search Results
        </span>
      </div>

      {/* Results container with scroll */}
      <div className="max-h-[340px] overflow-y-auto">
        {Object.entries(searchResults).map(([category, items]) => (
          <div
            key={category}
            className="border-b border-gray-50 last:border-b-0"
          >
            {/* Category header */}
            <div className="px-4 py-2 bg-gray-25">
              <h4 className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                {category.replace(/_/g, " ")}
              </h4>
            </div>

            {/* Results list */}
            <div className="py-1">
              {items.slice(0, 4).map((item, index) => (
                <button
                  type="button"
                  key={v4()}
                  onClick={() => {
                    const targetSlug = slugMap[category] || item.slug;
                    handleResultClick(targetSlug);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150 group"
                >
                  <div className="text-sm text-gray-800 group-hover:text-gray-900 truncate">
                    {category === "peoples" ? (
                      <>
                        <span className="font-medium">{item.Name}</span>
                        {item.Designation && (
                          <span className="text-gray-600">
                            {" "}
                            - {item.Designation}
                          </span>
                        )}
                        {item.Role && (
                          <span className="text-gray-500 text-xs">
                            {" "}
                            ({item.Role})
                          </span>
                        )}
                      </>
                    ) : category === "about-pages" ? (
                      item.title
                    ) : (
                      item.title
                    )}
                  </div>
                </button>
              ))}

              {/* Show more indicator if there are more items */}
              {items.length > 4 && (
                <div className="px-4 py-1">
                  <span className="text-xs text-gray-400">
                    +{items.length - 4} more in {category.replace(/_/g, " ")}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View all results footer */}
      <div className="px-4 py-2 border-t border-gray-100 bg-gray-50/30">
        <button
          type="button"
          onClick={() => {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            handleCloseSearch();
          }}
          className="w-full text-xs text-gray-600 hover:text-gray-800 transition-colors duration-150 text-center py-1"
        >
          View all results for "{searchQuery.trim()}"
        </button>
      </div>
    </div>
  );
}
