import { createFileRoute, useNavigate } from "@tanstack/react-router";
import CustomButton from "../components/CustomButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  return (
    <div className="bg-[url('/herodarkervertical.png')] bg-cover w-[100vw] h-[100vh]">
      <div className="flex flex-col h-full justify-end">
        <div
          style={{ color: "var(--home-text-color)" }}
          className="text-4xl font-bold flex items-center text-center flex-col gap-0"
        >
          <h1>Tito Acevedo</h1>
          <h1>Libros</h1>
        </div>
        <div
          style={{ color: "var(--home-text-color" }}
          className=" text-md flex items-center text-center flex-col gap-3 pt-5"
        >
          <h2>ESCRITOR DE CULTURA ARGENTINA</h2>
          <h2>RELATO Y DESCRIBO MIS VIAJES POR EL MUNDO</h2>
          <h2>LIBROS CON IDENTIDAD Y RAICES</h2>
        </div>
        <div className="flex justify-center cursor-pointer mt-2 mb-2">
          <CustomButton
            fontType="bold"
            heightPorcentViewport="7"
            widthPorcentViewport="50"
            text="VER LIBROS"
            textSize="xl"
            callBack={() => navigate({ to: "/books" })}
          />
        </div>
      </div>
    </div>
  );
}
