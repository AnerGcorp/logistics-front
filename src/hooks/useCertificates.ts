import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface Certificate {
  id: number;
  image: string;
  name: string;
  description: string;
}

const useCertificates = () => {
  const fetchCertificates = () =>
    axios.get<Certificate[]>(config.api.certificateURL).then((res) => res.data);

  return useQuery<Certificate[], Error>({
    queryKey: ["Certificate"],
    queryFn: fetchCertificates,
  });
};

export default useCertificates;
