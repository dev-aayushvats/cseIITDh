// hooks/useSearchResult.js
import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "../api/api";

export default function useSearchResult(query) {
	return useQuery({
		queryKey: ["searchResult", query],
		queryFn: async () => {
			const result = await getSearchResult(query);
			// Ensure we never return undefined (return null or empty object if needed)
			return typeof result === "undefined" ? null : result;
		},
		// enabled: !!query && query.length > 2, // Only search if query exists and > 2 chars
		enabled: !!query,
		staleTime: 5 * 60 * 1000,
		retry: 1,
	});
}
