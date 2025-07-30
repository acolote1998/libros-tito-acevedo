import { createFileRoute } from "@tanstack/react-router";
import BookItemComponent from "../../components/BookItemComponent";

export const Route = createFileRoute("/books/")({
  component: RouteComponent,
});

function RouteComponent() {
  const books = [
    {
      id: "Titulo1",
      img: "./placeholderbook.png",
      title: "Titulo 1",
      desc: "Desc 1",
    },
    {
      id: "Titulo2",
      img: "./placeholderbook.png",
      title: "Titulo 2",
      desc: "Desc 2",
    },
    {
      id: "Titulo3",
      img: "./placeholderbook.png",
      title: "Titulo 3",
      desc: "Desc 3",
    },
  ];
  return (
    <div>
      <h1 className="text-5xl font-semibold mt-2 mb-2 text-center">Libros</h1>
      <div className="grid grid-cols-2 gap-4 p-3">
        {books.map((b) => (
          <BookItemComponent {...b} />
        ))}
      </div>
    </div>
  );
}
