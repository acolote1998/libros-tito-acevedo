import { createFileRoute } from "@tanstack/react-router";
import FaqItem from "../../components/FaqItem";

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
        <FaqItem
          questionTitle="¿Cómo compro un libro desde Argentina?"
          questionAnswer="Comprar un libro desde Argentina es un proceso sencillo. En la barra de navegación inferior, debe hacer clic en el botón 'Ver todos los libros'. Seleccione el libro que le interese y luego elija su región o país más cercano. Allí se le mostrarán las opciones 'DIGITAL' y 'FÍSICO'.

Si elige la opción 'DIGITAL', estará adquiriendo el libro en formato electrónico para leerlo de inmediato en dispositivos como teléfono, tablet o computadora.

Si opta por 'FÍSICO', estará comprando el libro impreso en papel, que se enviará a su domicilio a través del servicio de correos.

Su selección lo redirigirá a la página oficial del producto en Amazon.com. Allí, simplemente debe hacer clic en 'Comprar ahora' ('Buy Now') —o agregarlo a su carrito si compra mas de un libro, proceder al pago y completar la información requerida para finalizar la transacción. Amazon gestiona todo el proceso de forma segura."
        />
        <FaqItem
          questionTitle="¿Necesito una tarjeta en dólares para comprar en Amazon?"
          questionAnswer="Test"
        />
        <FaqItem
          questionTitle="¿Puedo pagar con tarjeta de débito argentina?"
          questionAnswer="Test"
        />
        <FaqItem
          questionTitle="¿Es posible pagar en cuotas o solo en un pago?"
          questionAnswer="Test"
        />
        <FaqItem
          questionTitle="¿Cómo se calcula el precio en pesos si el libro está en dólares?"
          questionAnswer="Test"
        />
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Formatos y lectura
      </h2>
      <div>
        <FaqItem
          questionTitle="¿Qué es Kindle y cómo funciona?"
          questionAnswer="Test"
        />
        <FaqItem
          questionTitle="¿Necesito tener un dispositivo Kindle o puedo leer en mi celular/computadora?"
          questionAnswer="Test"
        />
        <FaqItem
          questionTitle="¿Se puede imprimir un ebook una vez comprado?"
          questionAnswer="Test"
        />
        <FaqItem
          questionTitle="¿Qué diferencia hay entre la versión digital y la versión en papel?"
          questionAnswer="Test"
        />
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Envíos y disponibilidad
      </h2>
      <div>
        <FaqItem
          questionTitle="¿Cuánto tarda en llegar un libro físico comprado en Amazon?"
          questionAnswer="Test"
        />
        <FaqItem
          questionTitle="¿Puedo conseguir los libros en librerías argentinas o solo online?"
          questionAnswer="Test"
        />
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Regalos y reseñas
      </h2>
      <div>
        <FaqItem
          questionTitle="¿Puedo regalar un libro digital a otra persona?"
          questionAnswer="Test"
        />
        <FaqItem
          questionTitle="¿Dónde puedo dejar una reseña o comentario sobre el libro?"
          questionAnswer="Test"
        />
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Sobre Tito y sus libros
      </h2>
      <div>
        <FaqItem
          questionTitle="¿En qué orden conviene leer los libros de Tito?"
          questionAnswer="Test"
        />
        <FaqItem
          questionTitle="¿Cómo puedo contactar a Tito para consultas o invitaciones?"
          questionAnswer="Test"
        />
      </div>
    </div>
  );
}
