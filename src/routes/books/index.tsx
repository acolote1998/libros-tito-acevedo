import { createFileRoute } from "@tanstack/react-router";
import BookItemComponent from "../../components/BookItemComponent";

export const Route = createFileRoute("/books/")({
  component: RouteComponent,
});

function RouteComponent() {
  const books = [
    {
      id: "tribusUrbanas",
      img: "./books/tribusUrbanasTapa.png",
      title: "Tribus Urbanas",
      desc: "Desc 1",
    },
    {
      id: "tonosYToneles",
      img: "./books/tonosYTonelesTapa.png",
      title: "Tonos y Toneles",
      desc: "Desc 2",
    },
    {
      id: "laMemoriaDeLosBoliches",
      img: "./books/laMemoriaDeLosBolichesTapa.png",
      title: "La memoria de los boliches",
      desc: "Desc 3",
    },
    {
      id: "bares",
      img: "./books/baresTapa.png",
      title: "Bares",
      desc: "Desc 4",
    },
    {
      id: "apuntesDeUnPataIPerro",
      img: "./books/apuntesDeUnPataIPerroTapa.png",
      title: "Apuntes de un pata i' perro",
      desc: "Desc 5",
    },
  ];
  return (
    <div>
      <h1 className="text-5xl font-semibold mt-2 mb-2 text-center">Libros</h1>
      <div className="grid grid-cols-2 gap-4 p-3 mb-14">
        {books.map((b) => (
          <BookItemComponent {...b} />
        ))}
      </div>
    </div>
  );
}
