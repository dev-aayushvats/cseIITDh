import { v4 } from "uuid";
import { useTalksAndEvents } from "../../hooks/useTalksAndEvents";
import { Link } from "react-router-dom"; // ✅ Required for routing

const TalkCard = ({
  title,
  speaker,
  designation,
  venue,
  time,
  date,
  description,
}) => (
  <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      <span className="italic">{title}</span>
    </h3>
    {speaker && (
      <div className="mb-2">
        <span className="font-semibold">Speaker:</span> {speaker}
        <br />
        {designation && (
          <span className="text-sm text-gray-600">{designation}</span>
        )}
      </div>
    )}
    {venue && (
      <div className="mb-1">
        <span className="text-red-600 font-semibold">&#x1F4CD; Venue:</span>{" "}
        {venue}
      </div>
    )}
    {time && (
      <div className="mb-1">
        <span className="text-blue-600 font-semibold">&#x23F0; Time:</span>{" "}
        {time}
      </div>
    )}
    {date && (
      <div className="mb-1">
        <span className="text-gray-600">{date}</span>
      </div>
    )}
    {description && <div className="mt-2 font-semibold">{description}</div>}
  </div>
);

export const TalkLoading = () => {
  return (
    <div className="animate-pulse space-y-4">
      {["skeleton-1", "skeleton-2", "skeleton-3"].map((label) => (
        <div key={label} className="bg-gray-200 rounded-lg p-4 h-32"></div>
      ))}
    </div>
  );
};

export default function TalksAndEventsSection() {
  const {
    data: talksAndEvents,
    isLoading: talksLoading,
    error: talksError,
  } = useTalksAndEvents();

  const topTalks = talksAndEvents?.slice(0, 3); // Show only top 3

  return (
    <div>
      {/* Header and button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Talks and Events
        </h2>
        <Link
          to="/allTalksEvents"
          className="text-sm bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700 transition font-medium"
        >
          View All Talks and Events
        </Link>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {talksLoading ? (
          <TalkLoading />
        ) : talksError ? (
          <div className="text-red-500 p-4 bg-red-50 rounded-lg">
            <p>Error loading talks and events: {talksError?.message}</p>
            <p className="text-sm mt-2">Please try refreshing the page.</p>
          </div>
        ) : topTalks?.length > 0 ? (
          topTalks.map((item) => (
            <TalkCard key={`talks-${item?.id || v4()}`} {...item} />
          ))
        ) : (
          <p className="text-gray-500">
            No talks or events available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}
