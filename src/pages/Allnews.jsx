import { v4 } from "uuid";
import { useNews } from "../hooks/useNews";
import { useState, useMemo } from "react";

const NewsCard = ({ title, date, description, link }) => (
  <button
    type="button"
    onClick={() => link && window.open(link, "_blank")}
    className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300 flex flex-col text-left h-full"
  >
    <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>
    <p className="text-sm text-indigo-600 font-medium">{date}</p>
    <p className="text-gray-600 text-sm mt-3 line-clamp-3 flex-grow">{description}</p>
  </button>
);

const NewsLoading = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="bg-gray-200 rounded-xl h-40 w-full"></div>
    ))}
  </div>
);

export default function NewsPage() {
  const { data: news, isLoading, error } = useNews();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = useMemo(() => {
    if (!news) return [];

    const sorted = [...news].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    if (!searchTerm.trim()) return sorted;

    const term = searchTerm.toLowerCase();
    return sorted.filter((item) =>
      [item.title, item.description, item.date].some((field) =>
        field?.toLowerCase().includes(term)
      )
    );
  }, [news, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          All News
        </h1>

        <div className="mb-6 w-full">
          <input
            type="text"
            placeholder="Search news by title, description, or date..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {isLoading ? (
          <NewsLoading />
        ) : error ? (
          <div className="text-red-500 bg-red-100 p-4 rounded-lg text-center">
            <p className="font-medium text-lg">Error loading news</p>
            <p className="text-sm mt-2">{error?.message || "Please try again later."}</p>
          </div>
        ) : filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <NewsCard key={`news-${item?.id || v4()}`} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">No news found matching your search.</p>
        )}
      </div>
    </div>
  );
}
