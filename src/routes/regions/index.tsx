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
    { img: "./br_flag.png", regionKey: "br", desc: "Brasil" },
    { img: "./mx_flag.png", regionKey: "mx", desc: "México" },
    { img: "./us_flag.png", regionKey: "us", desc: "Estados Unidos" },
    { img: "./ca_flag.png", regionKey: "ca", desc: "Canadá" },
    { img: "./es_flag.png", regionKey: "es", desc: "España" },
    { img: "./it_flag.png", regionKey: "it", desc: "Italia" },
    { img: "./fr_flag.png", regionKey: "fr", desc: "Francia" },
    { img: "./de_flag.png", regionKey: "de", desc: "Alemania" },
    { img: "./uk_flag.png", regionKey: "uk", desc: "Reino Unido" },
    { img: "./pl_flag.png", regionKey: "pl", desc: "Polonia" },
    { img: "./se_flag.png", regionKey: "se", desc: "Suecia" },
    { img: "./nl_flag.png", regionKey: "nl", desc: "Países Bajos" },
    { img: "./in_flag.png", regionKey: "in", desc: "India" },
    { img: "./jp_flag.png", regionKey: "jp", desc: "Japón" },
    { img: "./au_flag.png", regionKey: "au", desc: "Australia" },
  ];
  return (
    <div>
      <h1 className="text-5xl font-semibold mt-2 mb-2 text-center">Regiones</h1>
      <h2 className="text-2xl text-center mt-4 mb-2">
        Seleccione la región más próxima a su ubicación
      </h2>
      <div className="grid grid-cols-3 gap-4 p-3 mb-14">
        {regions.map((b) => (
          <RegionItemComponent {...b} />
        ))}
      </div>
    </div>
  );
}
