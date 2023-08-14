import axios from "axios";
import config from "../config";
import { useQuery } from "@tanstack/react-query";

interface Contacts {
  id: number;
  phone_numbers: string;
  emails: string;
  address: string;
}

const useContacts = () => {
  const fetchContacts = () =>
    axios.get<Contacts[]>(config.api.contactsURL).then((res) => res.data);

  return useQuery<Contacts[], Error>({
    queryKey: ["Contacts"],
    queryFn: fetchContacts,
  });
};

export default useContacts;
