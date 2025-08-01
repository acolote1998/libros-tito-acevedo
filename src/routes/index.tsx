import { createFileRoute, useNavigate } from "@tanstack/react-router";
import CustomButton from "../components/CustomButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  return (
    <div className="bg-[url('/herodarkervertical.png')] md:bg-[url('/bg-library.png')] bg-cover h-svh">
      <div className="md:flex items-center justify-center h-full">
        <div className="flex flex-col h-full justify-end md:justify-center">
          <div
            style={{ color: "var(--home-text-color)" }}
            className="text-4xl font-bold flex items-center text-center flex-col gap-0"
          >
            <div className="display md:hidden">
              <h1>Tito Acevedo</h1>
              <h1>Libros</h1>
            </div>
            <h1 className="hidden text-8xl mb-10 md:block">Tito Acevedo</h1>
          </div>
          <div
            style={{ color: "var(--home-text-color" }}
            className=" text-md md:text-3xl flex items-center md:items-start flex-col gap-3 md:gap-10 pt-5"
          >
            <h2>ESCRITOR DE CULTURA ARGENTINA</h2>
            <h2>RELATO Y DESCRIBO MIS VIAJES POR EL MUNDO</h2>
            <h2>LIBROS CON IDENTIDAD Y RAICES</h2>
          </div>
          <div className="flex justify-center cursor-pointer mt-2 mb-2">
            <div className="block md:hidden">
              <CustomButton
                fontType="bold"
                heightPorcentViewport="7"
                widthPorcentViewport="50"
                text="VER LIBROS"
                textSize="xl"
                callBack={() => navigate({ to: "/books" })}
              />
            </div>
            <div className="hidden mt-10 md:block">
              <CustomButton
                fontType="bold"
                heightPorcentViewport="10"
                widthPorcentViewport="25"
                text="VER LIBROS"
                textSize="4xl"
                callBack={() => navigate({ to: "/books" })}
              />
            </div>
          </div>
        </div>
        <img
          src="/horizontalHero.png"
          className="hidden md:block w-auto h-[60vh]"
        />
      </div>
    </div>
  );
}
