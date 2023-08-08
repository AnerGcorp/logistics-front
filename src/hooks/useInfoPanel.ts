import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface InfoPanel {
  id: number;
  phone_number: string;
  address: string;
}

const useInfoPanel = () => {
  const fetchInfos = () =>
    axios.get<InfoPanel[]>(config.api.aboutUsURL).then((res) => res.data);

  return useQuery<InfoPanel[], Error>({
    queryKey: ["Infos"],
    queryFn: fetchInfos,
  });
};

export default useInfoPanel;
