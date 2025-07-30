import { useMemo } from "react";
import Carousel from "../components/Carousel/Carousel";
import Gallery from "../components/Gallery/Gallery";
import NewsSection from "../components/Home/NewsSection";
import TalksAndEventsSection from "../components/Home/TalksAndEventsSection";

const Home = () => {
  // Load carousel images at build time using Vite's import.meta.glob for optimal performance and maintainability.
  const images = useMemo(() => {
    // Use import.meta.glob to eagerly import all supported image types from the carousel-images directory.
    const imageModules = import.meta.glob(
      "../assets/carousel-images/*.{png,jpg,jpeg,gif,svg,avif}",
      { eager: true, query: "url", import: "default" }
    );
    // Extract URLs and sort them alphabetically for consistent ordering.
    // return Object.values(imageModules).sort((a, b) => a.localeCompare(b));
    return Object.values(imageModules);
  }, []);

  return (
    <div className="py-6 px-4 md:px-8">
      {/* Carousel Section */}
      <div className="mb-10">
        <Carousel images={images} />
      </div>
      {/* News & Talks_events Section */}
      <div className="border-t border-gray-200 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NewsSection />
          <TalksAndEventsSection />
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
