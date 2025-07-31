import { useQuery } from "@tanstack/react-query";
import { fetchAllBooks } from "../api/fetchAllBooks";

const useAllBooks = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["allBooks"],
    queryFn: () => fetchAllBooks(),
  });

  return { isPending, error, data };
};

export default useAllBooks;
