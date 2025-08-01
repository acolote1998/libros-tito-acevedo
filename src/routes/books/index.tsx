import { createFileRoute } from "@tanstack/react-router";
import BookItemComponent from "../../components/BookItemComponent";
import useAllBooks from "../../hooks/useAllBooks";
export const Route = createFileRoute("/books/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: allBooksData } = useAllBooks();
  return (
    <div>
      <h1
        style={{ color: "var(--title-text-color)" }}
        className="text-5xl font-semibold mt-2 mb-2 text-center"
      >
        Libros
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 mb-14">
        {allBooksData && allBooksData.map((b) => <BookItemComponent {...b} />)}
      </div>
    </div>
  );
}
