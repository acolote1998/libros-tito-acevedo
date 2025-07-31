import { useNavigate } from "@tanstack/react-router";
import { BookIcon } from "../icons/BookIcon";

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
    h-13
    border-t-1
    rounded-t-md
    z-50
    gap-2"
      onClick={() => {
        navigate({ to: "/books" });
      }}
    >
      <BookIcon width={40} />
      <p className="font-bold text-lg">Ver todos los libros</p>
    </div>
  );
};

export default FooterBar;
