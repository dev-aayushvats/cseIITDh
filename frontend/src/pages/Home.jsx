import React from 'react';
import AltCarousel from '../components/Carousel/AltCarousel';

import img1 from '../assets/carousel-images/image1.jpg';
import img2 from '../assets/carousel-images/image2.jpg';
import img3 from '../assets/carousel-images/image3.jpg';

const EventCard = ({ title, date, description }) => (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-indigo-600 font-medium mt-1">{date}</p>
        <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>
        <button className="mt-3 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
            Learn more →
        </button>
    </div>
);

const NewsCard = ({ title, date, description, link }) => (
    <div onClick={() => { if(link) window.open(link, '_blank')}} className="cursor-pointer bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-indigo-600 font-medium mt-1">{date}</p>
        <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>
    </div>
);

const TalkCard = ({ title, speaker, designation, venue, time, date, image, description }) => (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-2"><span className="italic">{title}</span></h3>
        {/* {image && (
            <img src={image} alt={speaker} className="w-32 h-32 object-cover rounded-md mb-3 mx-auto" />
        )} */}
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

const Home = ({ props, isLoading, error }) => {
    const images = [img1, img2, img3];
    
    // console.log('Home Component Props:', props);
    
    // Format date from API response
    const formatDate = (dateString) => {
        if (!dateString || dateString.toLowerCase() === 'present') return 'Present';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    // Transform API news data to match our NewsCard component
    const transformedNews = props?.map(item => ({
        title: item.Title || '',
        date: formatDate(item.date),
        description: item.description || '',
        link: item.link || null
    })) || [];

    // console.log('Final transformed news:', transformedNews);

    // Sample talks_events data
    const talks_events = [
        {
            title: "Engineering the AI Transformation",
            speaker: "Dr. Dattatraya Kulkarni",
            designation: "Vice President, McAfee Fellow",
            venue: "F300, CLT",
            time: "2:00 - 3:00 PM, 17th April 2025",
            image: 'https://ci3.googleusercontent.com/mail-img-att/AGAZnRood_EE9IGJ9WWsYmmBFjXGHplSVXtyUWEYKNXVSB-fijWg-HHSXdg9YHX1jj1B0b7aoAbPQ-_ZH52SfozABYzeaUP_ubw0JCMDBqXRzOKkb4olNP4TQV7_XIFmfBI_wtZhOUFd1RRUX9Tel77-mnq1vB0DVU-_aF4AhV_XLzBo5IRLyYw8HoYAb1BNcfcmEWDSNJqeNktIxQicYWDnadJujdOVpSS08xMn34yzakQMQy7I9yNti2B36z4y68-3ys1bXy24GA5tkJi6QQ8eXEzc2OrGHVI_FGk8yVy_tORgoqT-eleIq60DqGOFhiuHcWngba2_62BiDbALQqg1po0zxBGJ1041A1mJlmYXqB__DYjEjdXCxn4RnpCjK3fZBgNAWTChNZrbuyNpQAiNBZ3cgnAvvNTyb-vy1mzX0khStZhPrGyiz19FeJj0iSAeouD_MinzpvneCuxq1kK4_37RKOTiOM074S83Cds1ezZPfsZDjmga74BzmftC-_VoNt4vw-THsbYtYwA1xHbyqlipbbiMo1b012deySYrJyQnGSoUcQYLhcaA_auMKjHtxvh_9DW4exFWd9fQRhpZzJkj12DbvdO11_RMEyuWfLd5puYGADkaAmnKNGZ3LFBpU15K5S_Hz174pmgIWoUPFaoEZ-nyvZEzvTCXccv6R2AC9_oUstlOU6ofcRxvcI4ZJx6_yS8ETXp0jYqsEN0D7-mQj9e1xb53cqSAURJ0skIZsdn63gog6tync2xIqi2r484YKe2ApDE9LFMxEEC5W3aAOHAYwp7IzV3nJUb-n0-zRCwjeJjrdRSJluRujofTGvZ_oY2XGdVrgy_R6gFgoo8h0yVt1hMTK4iBjRXAnJxTFM4c1Wkxy7iaepbP4nuIaurMMb3gyeqldSPPGwGxU5uUZO817b7zaukFU6aWijKwlQUKYOdmARH3Yf8vZuT-3hOUmeitydyENS6GVD0uI5aWB_Lz_FsxX_D-pMeGBeobnGhNj6mnAGPkEg6mp9PyxY-94Fz0RVa0ufKzkHbBVbhZ3A=s0-l75-ft',
        },
        {
            title: "Academic review meeting and Departmental Review",
            time: "16th and 17th April 2025",
        }
    ];

    return (
        <div className="py-6 px-4 md:px-8">
            {/* Carousel Section */}
            <div className="mb-10">
                <AltCarousel images={images} />
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
                            {talks_events.map((item, idx) => (
                                <TalkCard key={idx} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;