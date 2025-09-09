import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-3">
      <h1
        style={{ color: "var(--title-text-color)" }}
        className="text-3xl font-semibold mt-2 mb-2 text-center"
      >
        Preguntas Frecuentes
      </h1>
      <p className="text-center italic opacity-50 py-3">
        Para poder ver la respuesta a la pregunta en pantalla, simplemente
        clickeala
      </p>
      <h2 className="text-lg italic underline underline-offset-2">
        Compras y pagos
      </h2>
      <div>
        <details>
          <summary>¿Cómo compro un libro desde Argentina?</summary>
        </details>
        <details>
          <summary>
            ¿Necesito una tarjeta en dólares para comprar en Amazon?
          </summary>
        </details>
        <details>
          <summary>¿Puedo pagar con tarjeta de débito argentina?</summary>
        </details>
        <details>
          <summary>¿Es posible pagar en cuotas o solo en un pago?</summary>
        </details>
        <details>
          <summary>
            ¿Cómo se calcula el precio en pesos si el libro está en dólares?
          </summary>
        </details>
      </div>
      <h2 className="text-lg italic underline underline-offset-2">
        Formatos y lectura
      </h2>
      <div>
        <details>
          <summary>¿Qué es Kindle y cómo funciona?</summary>
        </details>
        <details>
          <summary>
            ¿Necesito tener un dispositivo Kindle o puedo leer en mi
            celular/computadora?
          </summary>
        </details>
        <details>
          <summary>¿Se puede imprimir un ebook una vez comprado?</summary>
        </details>
        <details>
          <summary>
            ¿Qué diferencia hay entre la versión digital y la versión en papel?
          </summary>
        </details>
      </div>
      <h2 className="text-lg italic underline underline-offset-2">
        Envíos y disponibilidad
      </h2>
      <div>
        <details>
          <summary>
            ¿Cuánto tarda en llegar un libro físico comprado en Amazon?
          </summary>
        </details>
        <details>
          <summary>
            ¿Puedo conseguir los libros en librerías argentinas o solo online?
          </summary>
        </details>
      </div>
      <h2 className="text-lg italic underline underline-offset-2">
        Regalos y reseñas
      </h2>
      <div>
        <details>
          <summary>¿Puedo regalar un libro digital a otra persona?</summary>
        </details>
        <details>
          <summary>
            ¿Dónde puedo dejar una reseña o comentario sobre el libro?
          </summary>
        </details>
      </div>
      <h2 className="text-lg italic underline underline-offset-2">
        Sobre Tito y sus libros
      </h2>
      <div>
        <details>
          <summary>¿En qué orden conviene leer los libros de Tito?</summary>
        </details>
        <details>
          <summary>
            ¿Cómo puedo contactar a Tito para consultas o invitaciones?
          </summary>
        </details>
      </div>
    </div>
  );
}
