import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Gallery {
  id: number;
  title: string;
  description: string;
  gallery: GalleryImage[];
  link: string;
  button: string;
  is_active: boolean;
  created: string;
}

const useGallery = () => {
  const fetchGallery = () =>
    axios.get<Gallery[]>(config.api.galleryURL).then((res) => res.data);

  return useQuery<Gallery[], Error>({
    queryKey: ["Gallery"],
    queryFn: fetchGallery,
  });
};

export default useGallery;
