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
      style={{
        backgroundColor: "var(--item-background-color)",
        color: "var(--item-text-color)",
      }}
      className="flex flex-col justify-center text-center items-center w-full rounded-2xl border-1 cursor-pointer"
      onClick={() => {
        navigate({
          to: "/books/$bookId",
          params: { bookId: bookId },
          search: { region: regionKey },
        });
      }}
    >
      <img src={img} className="p-5 md:pl-15 md:pr-15"></img>
      <h1 className="md:text-3xl">{desc}</h1>
    </div>
  );
};

export default RegionItemComponent;
