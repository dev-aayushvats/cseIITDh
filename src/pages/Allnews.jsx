import { v4 } from "uuid";
import { useNews } from "../hooks/useNews";
import { useState, useMemo } from "react";

const NewsCard = ({ title, date, description, link }) => (
  <button
    type="button"
    onClick={() => {
      if (link) window.open(link, "_blank");
    }}
    className="
      cursor-pointer bg-white rounded-2xl p-6 transition-all duration-300
      transform hover:-translate-y-1 shadow-md hover:shadow-xl
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
      text-left flex flex-col h-full
    "
  >
    <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
      {title}
    </h3>
    <p className="text-sm text-indigo-600 font-medium mt-2">{date}</p>
    <p className="text-gray-600 text-base mt-4 line-clamp-3 flex-grow">
      {description}
    </p>
  </button>
);

const NewsLoading = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="bg-gray-200 rounded-2xl h-48 w-full"></div>
    ))}
  </div>
);

export default function NewsPage() {
  const { data: news, isLoading: newsLoading, error: newsError } = useNews();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = useMemo(() => {
    if (!news) return [];

    const sorted = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!searchTerm.trim()) return sorted;

    const term = searchTerm.toLowerCase();
    return sorted.filter((item) =>
      [item.title, item.description, item.date].some((field) =>
        field?.toLowerCase().includes(term)
      )
    );
  }, [news, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Latest News
          </h1>
          <input
            type="text"
            placeholder="Search news by title, description, or date..."
            className="w-full md:w-80 px-4 py-3 border-2 border-gray-200 rounded-full
                       focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                       transition-colors duration-200 text-sm placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {newsLoading ? (
          <NewsLoading />
        ) : newsError ? (
          <div className="text-red-600 bg-red-50 p-6 rounded-xl max-w-xl mx-auto text-center border border-red-200">
            <p className="font-semibold text-lg">
              Oops, something went wrong!
            </p>
            <p className="text-sm mt-2">
              There was an error loading the news. Please try refreshing the page.
            </p>
          </div>
        ) : filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <NewsCard key={`news-${item?.id || v4()}`} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-center mt-20">
            <p className="text-lg">No news found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}