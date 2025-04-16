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
    <div onClick={() => window.open(link, '_blank')} className="cursor-pointer bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
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
        <div className="mb-2">
            <span className="font-semibold">Speaker:</span> {speaker}<br />
            {designation && <span className="text-sm text-gray-600">{designation}</span>}
        </div>
        {venue && <div className="mb-1"><span className="text-red-600 font-semibold">&#x1F4CD; Venue:</span> {venue}</div>}
        {time && <div className="mb-1"><span className="text-blue-600 font-semibold">&#x23F0; Time:</span> {time}</div>}
        {date && <div className="mb-1"><span className="text-gray-600">{date}</span></div>}
        {description && <div className="mt-2 font-semibold">{description}</div>}
    </div>
);

const Home = () => {
    const images = [img1, img2, img3];
    
    // Sample news data
    const news = [
        {
            title: "Admissions open for M.Tech. program",
            date: "Present",
            description: "The department is currently accepting applications for the M.Tech. program in Computer Science and Engineering from the academic year 2024-25.",
            link: "https://www.iitdh.ac.in/mtech"
        },
        {
            title: "Admissions open for PhD program",
            date: "Present",
            description: "The department is currently accepting applications for the PhD program in Computer Science and Engineering from the academic year 2024-25.",
            link: "https://www.iitdh.ac.in/phd"
        },
        {
            title: "Admissions open for M.Tech. by Research program",
            date: "Present",
            description: "The department is currently accepting applications for the M.Tech. by Research program in Computer Science and Engineering from the academic year 2024-25.",
            link: "https://www.iitdh.ac.in/mtech-research"
        },
        {
            title: "Faculty awarded prestigious research grant",
            date: "May 2024",
            description: "Prof. Vandana Bharti received a national research grant for her work in AI and Machine Learning."
        },
    ];

    // Sample talks data
    const talks = [
        {
            title: "Engineering the AI Transformation",
            speaker: "Dr. Dattatraya Kulkarni",
            designation: "Vice President, McAfee Fellow",
            venue: "F300, CLT",
            time: "2:00 - 3:00 PM, 17th April 2025",
            image: 'https://ci3.googleusercontent.com/mail-img-att/AGAZnRood_EE9IGJ9WWsYmmBFjXGHplSVXtyUWEYKNXVSB-fijWg-HHSXdg9YHX1jj1B0b7aoAbPQ-_ZH52SfozABYzeaUP_ubw0JCMDBqXRzOKkb4olNP4TQV7_XIFmfBI_wtZhOUFd1RRUX9Tel77-mnq1vB0DVU-_aF4AhV_XLzBo5IRLyYw8HoYAb1BNcfcmEWDSNJqeNktIxQicYWDnadJujdOVpSS08xMn34yzakQMQy7I9yNti2B36z4y68-3ys1bXy24GA5tkJi6QQ8eXEzc2OrGHVI_FGk8yVy_tORgoqT-eleIq60DqGOFhiuHcWngba2_62BiDbALQqg1po0zxBGJ1041A1mJlmYXqB__DYjEjdXCxn4RnpCjK3fZBgNAWTChNZrbuyNpQAiNBZ3cgnAvvNTyb-vy1mzX0khStZhPrGyiz19FeJj0iSAeouD_MinzpvneCuxq1kK4_37RKOTiOM074S83Cds1ezZPfsZDjmga74BzmftC-_VoNt4vw-THsbYtYwA1xHbyqlipbbiMo1b012deySYrJyQnGSoUcQYLhcaA_auMKjHtxvh_9DW4exFWd9fQRhpZzJkj12DbvdO11_RMEyuWfLd5puYGADkaAmnKNGZ3LFBpU15K5S_Hz174pmgIWoUPFaoEZ-nyvZEzvTCXccv6R2AC9_oUstlOU6ofcRxvcI4ZJx6_yS8ETXp0jYqsEN0D7-mQj9e1xb53cqSAURJ0skIZsdn63gog6tync2xIqi2r484YKe2ApDE9LFMxEEC5W3aAOHAYwp7IzV3nJUb-n0-zRCwjeJjrdRSJluRujofTGvZ_oY2XGdVrgy_R6gFgoo8h0yVt1hMTK4iBjRXAnJxTFM4c1Wkxy7iaepbP4nuIaurMMb3gyeqldSPPGwGxU5uUZO817b7zaukFU6aWijKwlQUKYOdmARH3Yf8vZuT-3hOUmeitydyENS6GVD0uI5aWB_Lz_FsxX_D-pMeGBeobnGhNj6mnAGPkEg6mp9PyxY-94Fz0RVa0ufKzkHbBVbhZ3A=s0-l75-ft',
            // description: "Engineering the AI Transformation"
        },
        // {
        //     title: "Recent Advances in Deep Learning",
        //     speaker: "Dr. S. K. Singh (IIT Bombay)",
        //     date: "10 May 2024",
        //     description: "A technical talk on the latest trends and breakthroughs in deep learning."
        // },
        // {
        //     title: "Quantum Computing: Opportunities and Challenges",
        //     speaker: "Dr. Priya Sharma (IISc Bangalore)",
        //     date: "2 May 2024",
        //     description: "An invited lecture on quantum computing and its future impact."
        // },
        // {
        //     title: "Secure Systems Design",
        //     speaker: "Dr. Rajesh Venkat (IIT Dharwad)",
        //     date: "25 April 2024",
        //     description: "A seminar on best practices and research in secure system architectures."
        // }
    ];

    return (
        <div className="py-6 px-4 md:px-8">
            {/* Carousel Section */}
            <div className="mb-10">
                <AltCarousel images={images} />
            </div>
            {/* News & Talks Section */}
            <div className="border-t border-gray-200 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* News Section */}
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">News</h2>
                        <div className="space-y-4">
                            {news.map((item, idx) => (
                                <NewsCard key={idx} {...item} />
                            ))}
                        </div>
                    </div>
                    {/* Talks Section */}
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Talks</h2>
                        <div className="space-y-4">
                            {talks.map((item, idx) => (
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