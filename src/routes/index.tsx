import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-[url('./herodarkervertical.png')] bg-cover w-[100vw] h-[100vh]">
      <div className="text-6xl text-white font-bold flex items-center text-center flex-col gap-3 pt-130">
        <h1>Tito Acevedo</h1>
        <h1>Libros</h1>
      </div>
      <div className="text-white text-md font-light flex items-center text-center flex-col gap-3 pt-10">
        <h2>ESCRITOR DE CULTURA ARGENTINA</h2>
        <h2>RETALOS E HISTORIAS DE MIS VIAJES POR EL MUNDO</h2>
        <h2>LIBROS CON IDENTIDAD Y RAICES</h2>
      </div>
      <div className="flex justify-center cursor-pointer">
        <div className="bg-orange-300 rounded-lg p-3 mt-10 w-[50vw] text-center">
          <p className="text-xl font-bold">VER LIBROS</p>
        </div>
      </div>
    </div>
  );
}
