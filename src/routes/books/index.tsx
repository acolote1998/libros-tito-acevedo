import { createFileRoute } from "@tanstack/react-router";
import BookItemComponent from "../../components/BookItemComponent";

export const Route = createFileRoute("/books/")({
  component: RouteComponent,
});

function RouteComponent() {
  const books = [
    { img: "./placeholderbook.png", title: "Titulo 1", desc: "Desc 1" },
    { img: "./placeholderbook.png", title: "Titulo 2", desc: "Desc 2" },
    { img: "./placeholderbook.png", title: "Titulo 3", desc: "Desc 3" },
  ];
  return (
    <div>
      <h1 className="text-3xl mt-16 text-center">Libros</h1>
      <div className="grid grid-cols-2 gap-4 p-3">
        {books.map((b) => (
          <BookItemComponent {...b} />
        ))}
      </div>
    </div>
  );
}
