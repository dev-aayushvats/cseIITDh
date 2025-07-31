import { useState, useMemo } from "react";
import { v4 } from "uuid";
import { useTalksAndEvents } from "../hooks/useTalksAndEvents";

const TalkCard = ({
  title,
  speaker,
  designation,
  venue,
  time,
  date,
  description,
}) => (
  <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-all duration-300 flex flex-col">
    <h3 className="text-xl font-semibold text-gray-800 mb-2 italic">{title}</h3>
    {speaker && (
      <div className="mb-1">
        <strong>Speaker:</strong> {speaker}
        {designation && <div className="text-sm text-gray-600">{designation}</div>}
      </div>
    )}
    {venue && <div><strong>📍 Venue:</strong> {venue}</div>}
    {time && <div><strong>⏰ Time:</strong> {time}</div>}
    {date && <div className="text-gray-600">{date}</div>}
    {description && <p className="mt-2 font-medium">{description}</p>}
  </div>
);

const TalksLoading = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="bg-gray-200 rounded-xl h-40 w-full"></div>
    ))}
  </div>
);

export default function AllTalksEventsPage() {
  const { data, isLoading, error } = useTalksAndEvents();
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return [...(data || [])]
      .filter((item) =>
        [item.title, item.speaker, item.designation, item.venue, item.description, item.date]
          .some((field) => field?.toLowerCase().includes(lowerSearch))
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [data, search]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          All Talks and Events
        </h1>

        <div className="mb-6 w-full">
          <input
            type="text"
            placeholder="Search talks, events, speakers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {isLoading ? (
          <TalksLoading />
        ) : error ? (
          <div className="text-red-500 bg-red-100 p-4 rounded-lg">
            Error loading data: {error.message}
          </div>
        ) : filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item) => (
              <TalkCard key={`talk-${item.id || v4()}`} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">No matching results found.</p>
        )}
      </div>
    </div>
  );
}
