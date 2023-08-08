import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  logo: string;
  image: string;
  name: string;
  description: string;
  link: string;
  button: string;
}

const useProducts = () => {
  const fetchProducts = () =>
    axios.get<Product[]>(config.api.productURL).then((res) => res.data);

  return useQuery<Product[], Error>({
    queryKey: ["Product"],
    queryFn: fetchProducts,
  });
};

export default useProducts;
