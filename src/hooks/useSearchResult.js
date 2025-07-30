// hooks/useSearchResult.js
import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "../api/api";

export default function useSearchResult(query) {
	return useQuery({
		queryKey: ["searchResult", query],
		queryFn: () => getSearchResult(query),
		enabled: !!query && query.length > 2, // Only search if query exists and > 2 chars
		staleTime: 5 * 60 * 1000,
		retry: 1,
	});
}
