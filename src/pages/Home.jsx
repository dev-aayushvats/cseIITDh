import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel/Carousel';
import Gallery from '../components/Gallery/Gallery';

const NewsCard = ({ title, date, description, link }) => (
    <div onClick={() => { if(link) window.open(link, '_blank')}} className="cursor-pointer bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-indigo-600 font-medium mt-1">{date}</p>
        <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>
    </div>
);

const TalkCard = ({ title, speaker, designation, venue, time, date, description }) => (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-2"><span className="italic">{title}</span></h3>
        {speaker && (
            <div className="mb-2">
                <span className="font-semibold">Speaker:</span> {speaker}<br />
                {designation && <span className="text-sm text-gray-600">{designation}</span>}
            </div>
        )}
        {venue && <div className="mb-1"><span className="text-red-600 font-semibold">&#x1F4CD; Venue:</span> {venue}</div>}
        {time && <div className="mb-1"><span className="text-blue-600 font-semibold">&#x23F0; Time:</span> {time}</div>}
        {date && <div className="mb-1"><span className="text-gray-600">{date}</span></div>}
        {description && <div className="mt-2 font-semibold">{description}</div>}
    </div>
);

const Home = () => {
    const [news, setNews] = useState([]);
    const [talksAndEvents, setTalksAndEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // The local image import has been removed.

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                
                const [newsResponse, talksAndEventsResponse] = await Promise.all([
                    fetch("https://cse.iitdh.ac.in/strapi/api/newss"),
                    fetch("https://cse.iitdh.ac.in/strapi/api/talk-and-events")
                ]);

                if (!newsResponse.ok || !talksAndEventsResponse.ok) {
                    throw new Error('Failed to fetch data');
                }

                const [newsJson, talksAndEventsJson] = await Promise.all([
                    newsResponse.json(),
                    talksAndEventsResponse.json()
                ]);

                const sortData = (data) => data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

                const sortedNews = sortData(newsJson.data);
                const sortedTalksAndEvents = sortData(talksAndEventsJson.data);

                localStorage.setItem('cachedNews', JSON.stringify(sortedNews));
                localStorage.setItem('cachedTalksAndEvents', JSON.stringify(sortedTalksAndEvents));
                localStorage.setItem('cacheTimestamp', Date.now().toString());

                setNews(sortedNews);
                setTalksAndEvents(sortedTalksAndEvents);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching data:', err);
            } finally {
                setIsLoading(false);
            }
        };

        const cachedNews = localStorage.getItem('cachedNews');
        const cachedTalksAndEvents = localStorage.getItem('cachedTalksAndEvents');
        const cacheTimestamp = localStorage.getItem('cacheTimestamp');
        const now = Date.now();

        if (cachedNews && cachedTalksAndEvents && cacheTimestamp && (now - parseInt(cacheTimestamp)) < 300000) {
            setNews(JSON.parse(cachedNews));
            setTalksAndEvents(JSON.parse(cachedTalksAndEvents));
            setIsLoading(false);
        } else {
            fetchData();
        }
    }, []);
    
    const formatDate = (dateString) => {
        if (!dateString || dateString.toLowerCase() === 'present') return 'Present';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const transformedNews = news?.map(item => ({
        title: item.Title || '',
        date: formatDate(item.date),
        description: item.description || '',
        link: item.link || null
    })) || [];

    const transformedTalksAndEvents = talksAndEvents?.map(item => ({
        title: item.Title || '',
        speaker: item.Speaker || null,
        designation: item.designation || null,
        venue: item.venue || null,
        time: item.date || null,
        date: null,
        description: null
    })) || [];

    return (
        <div className="py-6 px-4 md:px-8">
            {/* Carousel Section */}
            <div className="mb-10">
                {/* The Carousel component no longer needs the images prop */}
                <Carousel />
            </div>
            {/* News & Talks_events Section */}
            <div className="border-t border-gray-200 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* News Section */}
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">News</h2>
                        <div className="space-y-4">
                            {isLoading ? (
                                <div className="animate-pulse space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-gray-200 rounded-lg p-4 h-32"></div>
                                    ))}
                                </div>
                            ) : error ? (
                                <div className="text-red-500 p-4 bg-red-50 rounded-lg">
                                    <p>Error loading news: {error}</p>
                                    <p className="text-sm mt-2">Please try refreshing the page.</p>
                                </div>
                            ) : transformedNews.length > 0 ? (
                                transformedNews.map((item, idx) => (
                                    <NewsCard key={idx} {...item} />
                                ))
                            ) : (
                                <p className="text-gray-500">No news available at the moment.</p>
                            )}
                        </div>
                    </div>
                    {/* Talks_events Section */}
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Talks and Events</h2>
                        <div className="space-y-4">
                            {isLoading ? (
                                <div className="animate-pulse space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-gray-200 rounded-lg p-4 h-32"></div>
                                    ))}
                                </div>
                            ) : error ? (
                                <div className="text-red-500 p-4 bg-red-50 rounded-lg">
                                    <p>Error loading talks and events: {error}</p>
                                    <p className="text-sm mt-2">Please try refreshing the page.</p>
                                </div>
                            ) : transformedTalksAndEvents.length > 0 ? (
                                transformedTalksAndEvents.map((item, idx) => (
                                    <TalkCard key={idx} {...item} />
                                ))
                            ) : (
                                <p className="text-gray-500">No talks or events available at the moment.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-8">
                <Gallery />
            </div>
        </div>
    );
};

export default Home;