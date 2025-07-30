import { useNavigate, useSearch } from "@tanstack/react-router";
import type { RegionItem } from "../types/types";

const RegionItemComponent = ({ desc, img, regionKey }: RegionItem) => {
  const navigate = useNavigate();
  const { bookId } = useSearch({ strict: false });
  if (!bookId) {
    return;
  }
  return (
    <div
      key={regionKey}
      className="bg-orange-200 flex flex-col items-center w-full p-5 rounded-2xl border-1 cursor-pointer"
      onClick={() => {
        navigate({
          to: "/books/$bookId",
          params: { bookId: bookId },
          search: { region: regionKey },
        });
      }}
    >
      <img src={img}></img>
      <div className="pl-2">
        <h1>{desc}</h1>
      </div>
    </div>
  );
};

export default RegionItemComponent;
