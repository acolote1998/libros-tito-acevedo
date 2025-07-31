import axios from "axios";
import type { SpecificBook } from "../types/types";
export const fetchBookByName = async (
  bookName: string
): Promise<SpecificBook> => {
  const response = await axios.get(`/booksData/${bookName}.json`);
  return response.data;
};
