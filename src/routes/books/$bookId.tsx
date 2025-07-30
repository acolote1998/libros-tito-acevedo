import { createFileRoute, useSearch } from "@tanstack/react-router";

export const Route = createFileRoute("/books/$bookId")({
  component: RouteComponent,
  validateSearch: (search) => {
    return {
      region: String(search.region ?? ""),
    };
  },
});

function RouteComponent() {
  const { bookId } = Route.useParams();
  const { region } = useSearch({ strict: false });
  return (
    <div className="mt-50">
      ID {bookId} , Region {region}
    </div>
  );
}
