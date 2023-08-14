import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface AboutCompany {
  id: number;
  phone_number: string;
  email: string;
  address: string;
  web_image: string;
}

const useAboutCompany = () => {
  const fetchAboutCompany = () =>
    axios
      .get<AboutCompany[]>(config.api.aboutCompanyURL)
      .then((res) => res.data);

  return useQuery<AboutCompany[], Error>({
    queryKey: ["AboutCompany"],
    queryFn: fetchAboutCompany,
  });
};

export default useAboutCompany;
