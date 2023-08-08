import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface Category {
  id: number;
  icon: string;
  name: string;
  link: string;
}

const useCategories = () => {
  const fetchCategories = () =>
    axios.get<Category[]>(config.api.categoryURL).then((res) => res.data);

  return useQuery<Category[], Error>({
    queryKey: ["Category"],
    queryFn: fetchCategories,
  });
};

export default useCategories;
