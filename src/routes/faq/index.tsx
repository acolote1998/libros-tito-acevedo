import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1
        style={{ color: "var(--title-text-color)" }}
        className="text-3xl font-semibold mt-2 mb-2 text-center"
      >
        Preguntas Frecuentes
      </h1>
      <p className="text-center">
        En esta sección vas a encontrar respuestas a las preguntas más
        frecuentes sobre Tito y sus libros.
      </p>
    </div>
  );
}
