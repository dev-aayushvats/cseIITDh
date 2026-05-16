import { useQuery } from "@tanstack/react-query";
import { getTalksAndEvents } from "../api/api";

const transformTalksAndEvents = (talks) => {
	// Function to parse date strings like "07 Mar 2026", "21 Jan", "21 Jan (year not specified)"
	const parseDate = (dateString) => {
		if (!dateString) return null;

		try {
			// Remove "(year not specified)" text
			let cleanDate = dateString.replace(/\s*\(year not specified\)\s*/i, "").trim();

			// If year is missing, try to infer it
			const hasYear = /\d{4}/.test(cleanDate);
			if (!hasYear) {
				const currentYear = new Date().getFullYear();
				// If month is in the past this year, assume next year
				const tempDate = new Date(`${cleanDate} ${currentYear}`);
				const today = new Date();
				if (tempDate < today) {
					cleanDate += ` ${currentYear + 1}`;
				} else {
					cleanDate += ` ${currentYear}`;
				}
			}

			const date = new Date(cleanDate);
			return !isNaN(date.getTime()) ? date : null;
		} catch {
			return null;
		}
	};

	return talks
		?.map((item) => {
			const startDate = parseDate(item.startDate);
			const endDate = parseDate(item.endDate);

			return {
				title: item.Title || "",
				speaker: item.Speaker || null,
				designation: item.designation || null,
				venue: item.venue || null,
				time: item.time || null,
				startDate: startDate,
				endDate: endDate,
				date: endDate || startDate, // For backward compatibility
				dateDisplay: startDate && endDate
					? startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" }) +
					  (startDate.toDateString() !== endDate.toDateString()
						? ` - ${endDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
						: "")
					: startDate
					? startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })
					: null,
				description: item.description || null,
				links: item.links || null,
			};
		}) || [];
};

export function useTalksAndEvents() {
	return useQuery({
		queryKey: ["talks-and-events"],
		queryFn: getTalksAndEvents,
		select: transformTalksAndEvents,
		staleTime: 5 * 60 * 1000, // 5 minutes
	});
}