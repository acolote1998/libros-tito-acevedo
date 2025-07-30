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
    { img: "./ar-flag.png", regionKey: "br", desc: "Brasil" },
    { img: "./ar-flag.png", regionKey: "mx", desc: "México" },
    { img: "./ar-flag.png", regionKey: "us", desc: "Estados Unidos" },
    { img: "./ar-flag.png", regionKey: "ca", desc: "Canadá" },
    { img: "./ar-flag.png", regionKey: "es", desc: "España" },
    { img: "./ar-flag.png", regionKey: "it", desc: "Italia" },
    { img: "./ar-flag.png", regionKey: "fr", desc: "Francia" },
    { img: "./ar-flag.png", regionKey: "de", desc: "Alemania" },
    { img: "./ar-flag.png", regionKey: "uk", desc: "Inglaterra" },
    { img: "./ar-flag.png", regionKey: "pl", desc: "Polonia" },
    { img: "./ar-flag.png", regionKey: "se", desc: "Suecia" },
    { img: "./ar-flag.png", regionKey: "nl", desc: "Países Bajos" },
    { img: "./ar-flag.png", regionKey: "in", desc: "India" },
    { img: "./ar-flag.png", regionKey: "jp", desc: "Japón" },
    { img: "./ar-flag.png", regionKey: "au", desc: "Australia" },
  ];
  return (
    <div>
      <h1 className="text-5xl font-semibold mt-2 mb-2 text-center">Regiones</h1>
      <h2 className="text-2xl text-center mt-4 mb-2">
        Seleccione la región más próxima a su ubicación
      </h2>
      <div className="grid grid-cols-2 gap-4 p-3">
        {regions.map((b) => (
          <RegionItemComponent {...b} />
        ))}
      </div>
    </div>
  );
}
