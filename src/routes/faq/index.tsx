import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-3 pb-26 md:pb-13">
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
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Compras y pagos
      </h2>
      <div>
        <details className="my-2">
          <summary>¿Cómo compro un libro desde Argentina?</summary>
          <p className="bg-[var(--headerfooter-background-color)] text-[var(--headerfooter-text-color)] rounded-sm p-1 text-sm tracking-tight">
            Test
          </p>
        </details>
        <hr className="w-[15vw] opacity-40" />
        <details className="my-2">
          <summary>
            ¿Necesito una tarjeta en dólares para comprar en Amazon?
          </summary>
        </details>
        <hr className="w-[15vw] opacity-40" />
        <details className="my-2">
          <summary>¿Puedo pagar con tarjeta de débito argentina?</summary>
        </details>
        <hr className="w-[15vw] opacity-40" />
        <details className="my-2">
          <summary>¿Es posible pagar en cuotas o solo en un pago?</summary>
        </details>
        <hr className="w-[15vw] opacity-40" />
        <details className="my-2">
          <summary>
            ¿Cómo se calcula el precio en pesos si el libro está en dólares?
          </summary>
        </details>
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Formatos y lectura
      </h2>
      <div>
        <details className="my-2">
          <summary>¿Qué es Kindle y cómo funciona?</summary>
        </details>
        <hr className="w-[15vw] opacity-40" />
        <details className="my-2">
          <summary>
            ¿Necesito tener un dispositivo Kindle o puedo leer en mi
            celular/computadora?
          </summary>
        </details>
        <hr className="w-[15vw] opacity-40" />
        <details className="my-2">
          <summary>¿Se puede imprimir un ebook una vez comprado?</summary>
        </details>
        <hr className="w-[15vw] opacity-40" />
        <details className="my-2">
          <summary>
            ¿Qué diferencia hay entre la versión digital y la versión en papel?
          </summary>
        </details>
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Envíos y disponibilidad
      </h2>
      <div>
        <details className="my-2">
          <summary>
            ¿Cuánto tarda en llegar un libro físico comprado en Amazon?
          </summary>
        </details>
        <hr className="w-[15vw] opacity-40" />
        <details className="my-2">
          <summary>
            ¿Puedo conseguir los libros en librerías argentinas o solo online?
          </summary>
        </details>
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Regalos y reseñas
      </h2>
      <div>
        <details className="my-2">
          <summary>¿Puedo regalar un libro digital a otra persona?</summary>
        </details>
        <hr className="w-[15vw] opacity-40" />
        <details className="my-2">
          <summary>
            ¿Dónde puedo dejar una reseña o comentario sobre el libro?
          </summary>
        </details>
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Sobre Tito y sus libros
      </h2>
      <div>
        <details className="my-2">
          <summary>¿En qué orden conviene leer los libros de Tito?</summary>
        </details>
        <hr className="w-[15vw] opacity-40" />
        <details className="my-2">
          <summary>
            ¿Cómo puedo contactar a Tito para consultas o invitaciones?
          </summary>
        </details>
        <hr className="w-[15vw] opacity-40" />
      </div>
    </div>
  );
}
