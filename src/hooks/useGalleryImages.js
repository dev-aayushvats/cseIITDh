import { useQuery } from "@tanstack/react-query";
import { getGalleryImages } from "../api/api";

export default function useGalleryImages() {
	return useQuery({
		queryKey: ["GalleryImages"],
		queryFn: async () => {
			const data = await getGalleryImages();
			return data.map((item) => item.Image.url);
		},
		staleTime: 5 * 60 * 1000,
	});
}
