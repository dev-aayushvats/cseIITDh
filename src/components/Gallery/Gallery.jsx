import { useEffect, useState } from "react";
import useGalleryImages from "../../hooks/useGalleryImages"; // Import the new hook
import GlobalError from "../GlobalError"; // Assuming a global error component exists

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { data: galleryImages, isLoading, isError, error } = useGalleryImages();

  // Effect to prevent background scrolling when the modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  // Display a loading state while images are being fetched.
  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
          Gallery
        </h2>
        <div className="flex justify-center items-center h-44">
          <p className="text-gray-500">Loading Gallery...</p>
        </div>
      </div>
    );
  }

  // Display an error message if the API call fails.
  if (isError) {
    return (
      <div className="py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
          Gallery
        </h2>
        <GlobalError error={error} />
      </div>
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
        Gallery
      </h2>

      {/* --- Horizontally Scrolling Thumbnails --- */}
      {galleryImages && galleryImages.length > 0 ? (
        <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-200">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              key={image} // Use the unique image URL as the key
              className="flex-shrink-0 w-64 h-44 sm:w-80 sm:h-56 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery thumbnail ${index + 1}`}
                loading="lazy"
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
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Enlarged gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              loading="lazy"
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