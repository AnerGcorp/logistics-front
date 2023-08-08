import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface Banner {
  id: number;
  name: string;
  description: string;
  web_image: string;
  mobile_image: string;
  link: string;
  button: string;
}

const useBanner = () => {
  const fetchBanner = () =>
    axios.get<Banner[]>(config.api.bannerURL).then((res) => res.data);

  return useQuery<Banner[], Error>({
    queryKey: ["Banner"],
    queryFn: fetchBanner,
  });
};

export default useBanner;
