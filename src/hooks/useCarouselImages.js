import { useQuery } from "@tanstack/react-query";
import { getCarouselImages } from "../api/api";

export default function useCarouselImages() {
	return useQuery({
		queryKey: ["carouselImages"],
		queryFn: async () => {
			const data = await getCarouselImages();
			return data.map((item) => item.Image.url);
		},
		staleTime: 5 * 60 * 1000,
	});
}
