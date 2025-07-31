import { useNavigate } from "@tanstack/react-router";
import type { BookItem } from "../types/types";
const BookItemComponent = ({ desc, img, title, id }: BookItem) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-orange-200 flex flex-col items-center w-full p-2 text-center rounded-2xl border-1 cursor-pointer"
      onClick={() => {
        navigate({ to: "/regions", search: { bookId: id } });
      }}
    >
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <img src={img} className="w-35"></img>
      <div className="pl-2">
        <h2>{desc}</h2>
      </div>
    </div>
  );
};

export default BookItemComponent;
