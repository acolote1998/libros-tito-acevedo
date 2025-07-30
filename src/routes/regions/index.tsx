import { createFileRoute } from "@tanstack/react-router";
import RegionItemComponent from "../../components/RegionItemComponent";

export const Route = createFileRoute("/regions/")({
  component: RouteComponent,
  validateSearch: (search) => {
    return {
      bookId: String(search.bookId ?? ""),
    };
  },
});

function RouteComponent() {
  const regions = [
    { img: "./ar-flag.png", regionKey: "en", desc: "Inglaterra" },
    { img: "./ar-flag.png", regionKey: "mx", desc: "Mexico" },
    { img: "./ar-flag.png", regionKey: "de", desc: "Alemania" },
  ];
  return (
    <div>
      <h1 className="text-3xl mt-16 text-center">Regiones</h1>
      <div className="grid grid-cols-2 gap-4 p-3">
        {regions.map((b) => (
          <RegionItemComponent {...b} />
        ))}
      </div>
    </div>
  );
}
