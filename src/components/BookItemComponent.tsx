import type { BookItem } from "../types/types";
const BookItemComponent = ({ desc, img, title }: BookItem) => {
  return (
    <div className="bg-orange-200 flex items-center w-full p-5 rounded-2xl border-1">
      <img src={img}></img>
      <div className="pl-2">
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
    </div>
  );
};

export default BookItemComponent;
