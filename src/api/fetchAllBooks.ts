import axios from "axios";
import type { BookItem } from "../types/types";
export const fetchAllBooks = async (): Promise<Array<BookItem>> => {
  const response = await axios.get(`/booksData/allBooks.json`);
  return response.data;
};
