import axios from "axios";
export const fetchBookByName = async (bookName: string) => {
  const response = await axios.get(`./booksData/${bookName}`);
  return response.data;
};
