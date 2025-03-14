import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

export const endpoints = {
  MATCHES: "/fronttemps",
};

export const fetchMatches = () => instance.get<MatchesResponse>(endpoints.MATCHES).then(({ data: res }) => res.data.matches)