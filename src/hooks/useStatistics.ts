import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface Statistics {
  id: number;
  icon: string;
  title: string;
  number: number;
  description: string;
  is_active: boolean;
}

const useStatistics = () => {
  const fetchStatistics = () =>
    axios.get<Statistics[]>(config.api.statisticsURL).then((res) => res.data);

  return useQuery<Statistics[], Error>({
    queryKey: ["Statistics"],
    queryFn: fetchStatistics,
  });
};

export default useStatistics;
