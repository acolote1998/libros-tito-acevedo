import { useQuery } from "@tanstack/react-query";
import { fetchBookByName } from "../api/fetchBookByName";

const useBook = (bookName: string) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["book", bookName],
    queryFn: () => fetchBookByName(bookName),
  });

  return { isPending, error, data };
};

export default useBook;
