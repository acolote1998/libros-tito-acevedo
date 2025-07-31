import { createFileRoute } from "@tanstack/react-router";
import RegionItemComponent from "../../components/RegionItemComponent";
import useRegions from "../../hooks/useRegions";

export const Route = createFileRoute("/regions/")({
  component: RouteComponent,
  validateSearch: (search) => {
    return {
      bookId: String(search.bookId ?? ""),
    };
  },
});

function RouteComponent() {
  const { data: regions } = useRegions();
  return (
    <div>
      <h1
        style={{ color: "var(--title-text-color)" }}
        className="text-5xl font-semibold mt-2 mb-2 text-center"
      >
        Regiones
      </h1>
      <h2
        style={{ color: "var(--title-text-color)" }}
        className="text-2xl text-center mt-4 mb-2"
      >
        Seleccione la región más próxima a su ubicación
      </h2>
      <div className="grid grid-cols-3 gap-4 p-3 mb-14">
        {regions && regions.map((b) => <RegionItemComponent {...b} />)}
      </div>
    </div>
  );
}
