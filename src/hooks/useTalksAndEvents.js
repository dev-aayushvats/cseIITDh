import { useQuery } from "@tanstack/react-query";
import { getTalksAndEvents } from "../api/api";

const transformTalksAndEvents = (talks) =>
	talks
		?.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
		.map((item) => ({
			title: item.Title || "",
			speaker: item.Speaker || null,
			designation: item.designation || null,
			venue: item.venue || null,
			time: item.date || null,
			date: null,
			description: null,
		})) || [];

export function useTalksAndEvents() {
	return useQuery({
		queryKey: ["talks-and-events"],
		queryFn: getTalksAndEvents,
		select: transformTalksAndEvents,
		staleTime: 5 * 60 * 1000, // 5 minutes
	});
}
