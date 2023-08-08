import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface Logo {
  id: number;
  icon: string;
  name: string;
}

const useLogo = () => {
  const fetchLogos = () =>
    axios.get<Logo[]>(config.api.logoURL).then((res) => res.data);

  return useQuery<Logo[], Error>({
    queryKey: ["Logo"],
    queryFn: fetchLogos,
  });
};

export default useLogo;
