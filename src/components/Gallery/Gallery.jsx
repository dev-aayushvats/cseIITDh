import { useEffect, useMemo, useState } from "react";

const Gallery = () => {
  // State to hold the URL of the currently enlarged image
  const [selectedImage, setSelectedImage] = useState(null);

  // Import images from the specified folder
  // Optimized: Use useMemo to avoid re-importing on every render, fix glob pattern (remove space after comma), and sort for consistent order
  const galleryImages = useMemo(() => {
    const imageModules = import.meta.glob(
      "../../assets/gallery-images/**/*.{avif,png,jpg,jpeg,gif,svg}",
      { eager: true, import: "default" }
    );
    // Sort images alphabetically for consistent order
    return Object.values(imageModules);
  }, []);

  // Effect to prevent background scrolling when the modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to reset scroll behavior when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div className="py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
        Gallery
      </h2>

      {/* --- Horizontally Scrolling Thumbnails --- */}
      {galleryImages.length > 0 ? (
        <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-200">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              key={`gallery-${
                // biome-ignore lint/suspicious/noArrayIndexKey: Image with no id
                index
              }`}
              className="flex-shrink-0 w-64 h-44 sm:w-80 sm:h-56 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </button>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No images in the gallery yet.
        </p>
      )}

      {/* --- Image Modal/Lightbox --- */}
      {selectedImage && (
        <button
          type="button"
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)} // Click outside the image to close
        >
          <div className="relative">
            {/* The stopPropagation prevents the modal from closing when the image itself is clicked */}
            <img
              onKeyDown={(e) => e.stopPropagation()}
              src={selectedImage}
              alt="Enlarged gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold"
              aria-label="Close image view"
            >
              &times;
            </button>
          </div>
        </button>
      )}
    </div>
  );
};

export default Gallery;
