import { useNavigate } from "@tanstack/react-router";
import type { BookItem } from "../types/types";
const BookItemComponent = ({ desc, img, title }: BookItem) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-orange-200 flex items-center w-full p-5 rounded-2xl border-1 cursor-pointer"
      onClick={() => {
        navigate({ to: "/regions", search: { book: title } });
      }}
    >
      <img src={img}></img>
      <div className="pl-2">
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
    </div>
  );
};

export default BookItemComponent;
