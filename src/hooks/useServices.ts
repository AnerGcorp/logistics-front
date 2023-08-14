import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface WorkList {
  id: number;
  icon: string;
  title: string;
  link: string;
  button: string;
}

interface Services {
  id: number;
  works: WorkList[];
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  button: string;
}

const useServices = () => {
  const fetchServices = () =>
    axios.get<Services[]>(config.api.moreAboutUsURL).then((res) => res.data);

  return useQuery<Services[], Error>({
    queryKey: ["Services"],
    queryFn: fetchServices,
  });
};

export default useServices;
