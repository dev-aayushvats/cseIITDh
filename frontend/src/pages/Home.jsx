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

const Home = () => {
    const images = [img1, img2, img3];
    
    // Sample event data
    const events = [
        {
            title: "Annual Technical Symposium",
            date: "May 15-16, 2023",
            description: "Join us for two days of technical talks, workshops, and networking opportunities."
        },
        {
            title: "Research Colloquium",
            date: "June 5, 2023",
            description: "Faculty and students present their latest research findings in computer science."
        },
        {
            title: "Industry Connect Program",
            date: "July 10, 2023",
            description: "Connect with industry leaders and explore internship and job opportunities."
        },
        {
            title: "Hackathon 2023",
            date: "August 20-21, 2023",
            description: "A 24-hour coding competition with exciting prizes and learning opportunities."
        }
    ];

    return (
        <div className="py-6 px-4 md:px-8">
            {/* Carousel Section */}
            <div className="mb-10">
                <AltCarousel images={images} />
            </div>
            
            {/* Events Section */}
            <div>
                <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {events.map((event, index) => (
                            <EventCard 
                                key={index}
                                title={event.title}
                                date={event.date}
                                description={event.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;