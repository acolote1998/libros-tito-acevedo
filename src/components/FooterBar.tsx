import { useNavigate } from "@tanstack/react-router";
import { BookIcon } from "../icons/BookIcon";
import { BrowserIcon } from "../icons/BrowserIcon";
import { QuestionIcon } from "../icons/QuestionIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";

const FooterBar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        color: "var(--headerfooter-text-color",
        backgroundColor: "var(--headerfooter-background-color",
      }}
      className="
    flex
    cursor-pointer
    justify-center
    items-center
    align-middle
    fixed
    bottom-0
    w-full
    h-26
    md:h-13
    border-t-1
    rounded-t-md
    z-50
    gap-4
    md:gap-10
    lg:gap-20
    text-center font-normal text-xs md:font-bold md:text-md"
    >
      <div
        className="flex flex-col md:flex-row items-center gap-2"
        onClick={() => {
          navigate({ to: "/books" });
        }}
      >
        <BookIcon width={36} />
        <p>Ver todos los libros</p>
      </div>
      <div
        className="flex flex-col md:flex-row items-center gap-2"
        onClick={() => {
          navigate({ to: "/books" });
        }}
      >
        <BrowserIcon width={36} />
        <p>Más sobre mí</p>
      </div>
      <div
        className="flex flex-col md:flex-row items-center gap-2 mt-2 md:mt-0"
        onClick={() => {
          navigate({ to: "/books" });
        }}
      >
        <QuestionIcon width={30} />
        <p>Preguntas frecuentes</p>
      </div>
      <div
        className="flex flex-col md:flex-row items-center gap-2 mt-2 md:mt-0"
        onClick={() => {
          navigate({ to: "/books" });
        }}
      >
        <WhatsappIcon width={28} />
        <p>Chatea conmigo</p>
      </div>
    </div>
  );
};

export default FooterBar;
