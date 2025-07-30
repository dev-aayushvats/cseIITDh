import { v4 } from "uuid";
import { useNews } from "../../hooks/useNews";

const NewsCard = ({ title, date, description, link }) => (
  <button
    type="button"
    onClick={() => {
      if (link) window.open(link, "_blank");
    }}
    className="cursor-pointer bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
  >
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-indigo-600 font-medium mt-1">{date}</p>
    <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>
  </button>
);

const NewsLoading = () => {
  return (
    <div className="animate-pulse space-y-4">
      {["skeleton-1", "skeleton-2", "skeleton-3"].map((i) => (
        <div key={i} className="bg-gray-200 rounded-lg p-4 h-32"></div>
      ))}
    </div>
  );
};

export default function NewsSection() {
  const { data: news, isLoading: newsLoading, error: newsError } = useNews();

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">News</h2>
      <div className="space-y-4">
        {newsLoading ? (
          <NewsLoading />
        ) : newsError ? (
          <div className="text-red-500 p-4 bg-red-50 rounded-lg">
            <p>Error loading news: {newsError?.message}</p>
            <p className="text-sm mt-2">Please try refreshing the page.</p>
          </div>
        ) : news.length > 0 ? (
          news.map((item) => (
            <NewsCard key={`news-${item?.id || v4()}`} {...item} />
          ))
        ) : (
          <p className="text-gray-500">No news available at the moment.</p>
        )}
      </div>
    </div>
  );
}
