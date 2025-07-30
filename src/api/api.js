import axios from "axios";
import { constant } from "../constant/constant";

const axiosInstance = axios.create({
	baseURL: constant.baseURL,
});

export const getNews = async () => {
	const { data } = await axiosInstance.get("/newss");
	return data?.data;
};

export const getTalksAndEvents = async () => {
	const { data } = await axiosInstance.get("/talk-and-events");
	return data?.data;
};

export const getAboutPageData = async () => {
	const { data } = await axiosInstance.get("/about-pages");
	return data?.data;
};

export const getAcademicRules = async () => {
	const { data } = await axiosInstance.get("/academic-ruless");
	return data?.data?.[0]?.Rules;
};

export const getAcademicFaq = async () => {
	const { data } = await axiosInstance.get("/acad-faqs");
	return data?.data?.map((item) => ({
		question: item.Question,
		answer: item.Answer,
	}));
};

export const getAdmissionsInfo = async () => {
	const { data } = await axiosInstance.get("/admissions-pages");
	return data?.data?.[0].allData;
};

export const getPeopleInfo = async () => {
	const { data } = await axiosInstance.get("/peoples?pagination[pageSize]=50");
	return data?.data;
};

export const getResearchData = async () => {
	const { data } = await axiosInstance.get("/research-labs");
	return data?.data;
};

export const getResearchProjectsData = async () => {
	const { data } = await axiosInstance.get("/research-projects");
	return data?.data;
};

export const getCarouselImages = async () => {
	const { data } = await axiosInstance.get("/carousel-imagess?populate=*");
	return data?.data;
};

export const getSearchResult = async (query) => {
	if (!query || typeof query !== "string" || !query.trim()) {
		throw new Error("A valid search query must be provided.");
	}
	const encodedQuery = encodeURIComponent(query.trim());
	const { data } = await axiosInstance.get(
		`/fuzzy-search/search?query=${encodedQuery}`,
	);
	return data?.data;
};
