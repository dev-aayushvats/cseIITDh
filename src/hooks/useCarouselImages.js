
import { useQuery } from "@tanstack/react-query";
import { getCarouselImages } from "../api/api";

export default function useCarouselImages() {
  return useQuery({
    queryKey: ["carouselImages"],
    queryFn: async () => {
      const data = await getCarouselImages();

      return data.map((item) => ({
        image: item.Image.url,
        link: item.Link || null, // change "Link" if your field name differs
      }));
    },
    staleTime: 5 * 60 * 1000,
  });
}