import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RAPID_API_KEY = process.env.REACT_APP_PUBLIC_KEY;

const options = {
  params: {
    q: "react",
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": RAPID_API_KEY.toString(),
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const responce = await axios.get(`${BASE_URL}/${url}`, options);
    return responce.data;
  },
};
