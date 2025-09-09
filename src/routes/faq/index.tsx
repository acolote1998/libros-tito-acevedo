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
          questionAnswer="No es necesario que tu tarjeta esté denominada en dólares (USD). Se puede utilizar una tarjeta de crédito o débito argentina, o de cualquier lugar. Amazon convierte automáticamente el precio final a pesos argentinos (ARS)."
        />
        <FaqItem
          questionTitle="¿Puedo pagar con tarjeta de débito argentina?"
          questionAnswer="Sí, siempre y cuando tu tarjeta de débito tenga habilitada la funcionalidad para compras internacionales online, lo cual hoy en día es lo normal. Para preguntas al respecto, te recomendamos contactar a tu banco."
        />
        <FaqItem
          questionTitle="¿Es posible pagar en cuotas o solo en un pago?"
          questionAnswer="Amazon permite el pago en cuotas sin interés utilizando tarjetas de crédito de bancos que tengan un convenio con ellos. La disponibilidad de esta opción depende de tu banco y se mostrará como alternativa durante el proceso de pago en el sitio de Amazon si estuviese disponible."
        />
        <FaqItem
          questionTitle="¿Cómo se calcula el precio en pesos si el libro está en moneda extranjera?"
          questionAnswer="El precio final en tu moneda (por ejemplo pesos argentinos) lo calcula tu banco al aplicar el tipo de cambio del día. Depende de tu región, Amazon muestra el precio en diferentes monedas, pero la conversión exacta la determina la entidad financiera al procesar el pago."
        />
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Formatos y lectura
      </h2>
      <div>
        <FaqItem
          questionTitle="¿Qué es Kindle y cómo funciona?"
          questionAnswer="Kindle es el sistema de lectura digital de Amazon. Un libro en formato Kindle (también llamado eBook, o libro digital) es un archivo digital que podes comprar, descargar y leer al instante. Funciona a través de aplicaciones gratuitas (apps) o dispositivos específicos, permitiéndote llevar una biblioteca completa contigo."
        />
        <FaqItem
          questionTitle="¿Necesito tener un dispositivo Kindle o puedo leer en mi celular/computadora?"
          questionAnswer="No necesitas un dispositivo Kindle físico! Podes leer los eBooks de Tito Acevedo en cualquier celular (Android o iPhone), tablet, computadora o incluso en tu navegador web. Solo necesitas descargar la aplicación gratuita 'Kindle' a tu dispositivo (desde App Store o Google Play Store) o desde la web de Amazon."
        />
        <FaqItem
          questionTitle="¿Se puede imprimir un ebook una vez comprado?"
          questionAnswer="Por restricciones de derechos de autor (copyright) y protección del trabajo intelectual, los eBooks de Kindle no están diseñados para ser impresos. La licencia de compra otorga el derecho de lectura personal en dispositivos compatibles, pero no incluye la impresión del archivo."
        />
        <FaqItem
          questionTitle="¿Qué diferencia hay entre la versión digital y la versión en papel?"
          questionAnswer="Versión Digital (eBook/Kindle): Disponibilidad inmediata, precio más bajo, portabilidad de los libros en tu dispositivo. También permite ajustar el tamaño de la letra.

Versión Impresa: Producto físico, ideal para coleccionistas y amantes del libro tradicional. Amazon lo entrega a tu casa a través de su sistema de envíos y logística."
        />
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Envíos y disponibilidad
      </h2>
      <div>
        <FaqItem
          questionTitle="¿Cuánto tarda en llegar un libro físico comprado en Amazon?"
          questionAnswer="El tiempo de entrega para libros físicos enviados por Amazon varía dependiendo de la logística, la aduana y la ubicación exacta dentro del país. Amazon proporcionará una estimación de fecha de entrega más precisa antes de que confirmes la compra."
        />
        <FaqItem
          questionTitle="¿Puedo conseguir los libros en librerías argentinas o solo online?"
          questionAnswer="Actualmente, la distribución principal de los libros de Tito Acevedo se realiza de forma online a través de Amazon, lo que garantiza su disponibilidad para todo el mundo."
        />
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">Reseñas</h2>
      <div>
        <FaqItem
          questionTitle="¿Dónde puedo dejar una reseña o comentario sobre el libro?"
          questionAnswer="¡Las reseñas son extremadamente valiosas para apoyar al autor! Podes (y te alentamos a) dejar tu opinión en la página del libro en Amazon. Baja hasta la sección 'Valoraciones y reseñas' y hacé clic en 'Escribir una reseña'. Tu experiencia ayuda a otros lectores a descubrir estas historias."
        />
      </div>
      <hr className="w-[80vw] opacity-20" />
      <h2 className="text-lg italic underline underline-offset-2">
        Sobre Tito y sus libros
      </h2>
      <div>
        <FaqItem
          questionTitle="¿En qué orden conviene leer los libros de Tito?"
          questionAnswer="Cada libro de Tito Acevedo está escrito para ser disfrutado de forma independiente. Sin embargo, si preferís seguir un orden temático o de publicación, te recomendamos leer en orden cronológico. Haciendo click en 'Ver todos los libros' en la barra de navegación inferior y deslizándote hasta el final, se encuentra 'Gente Tiempo' (1972), que es el primer libro escrito. Se recomienda leer desde ahí hacia arriba."
        />
        <FaqItem
          questionTitle="¿Cómo puedo contactar a Tito para consultas o invitaciones?"
          questionAnswer="Test"
        />
      </div>
    </div>
  );
}
