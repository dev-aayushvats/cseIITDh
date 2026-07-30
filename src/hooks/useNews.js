import { useQuery } from "@tanstack/react-query";
import { getNews } from "../api/api";

// Parse date strings like "15 Mar 2026", "15 Mar", "2026-03-15"
const parseDate = (dateString) => {
	if (!dateString || dateString.toLowerCase() === "present") return null;

	try {
		let cleanDate = dateString.replace(/\s*\(year not specified\)\s*/i, "").trim();

		const hasYear = /\d{4}/.test(cleanDate);
		if (!hasYear) {
			const currentYear = new Date().getFullYear();
			const tempDate = new Date(`${cleanDate} ${currentYear}`);
			const today = new Date();
			cleanDate += tempDate < today ? ` ${currentYear + 1}` : ` ${currentYear}`;
		}

		const date = new Date(cleanDate);
		return !isNaN(date.getTime()) ? date : null;
	} catch {
		return null;
	}
};

const formatDateDisplay = (dateString, date) => {
	if (!dateString) return "";
	if (dateString.toLowerCase() === "present") return "Present";
	return date
		? date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
		: dateString;
};

const transformNews = (news) =>
	// Present data in the same order as it appears in the Google Sheet (no sorting)
	news?.map((item) => {
		const date = parseDate(item.date);
		return {
			title: item.Title || "",
			date, // Date object (or null) for filtering/sorting
			dateDisplay: formatDateDisplay(item.date, date),
			description: item.description || "",
			link: item.link || null,
		};
	}) || [];

export function useNews() {
	return useQuery({
		queryKey: ["news"],
		queryFn: getNews,
		select: transformNews,
		staleTime: 5 * 60 * 1000, // 5 minutes
	});
}