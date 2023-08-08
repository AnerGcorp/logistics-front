import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface NewsImage {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface News {
  id: number;
  title: string;
  description: string;
  images: NewsImage[];
  link: string;
  button: string;
  is_active: boolean;
  created: string;
}

const useNews = () => {
  const fetchNews = () =>
    axios.get<News[]>(config.api.newsURL).then((res) => res.data);

  return useQuery<News[], Error>({
    queryKey: ["News"],
    queryFn: fetchNews,
  });
};

export default useNews;
