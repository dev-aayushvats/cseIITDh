import { useQuery } from "@tanstack/react-query";
import { getGalleryImages } from "../api/api";

export default function useGalleryImages() {
  return useQuery({
    queryKey: ["GalleryImages"],
    queryFn: async () => {
      const data = await getGalleryImages();

      return data.map((item) => ({
        url: item.Image?.url, 
        description: item.description || "No description available", 
      }));
    },
    staleTime: 5 * 60 * 1000,
  });
}
