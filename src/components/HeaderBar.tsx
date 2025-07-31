import { useNavigate } from "@tanstack/react-router";

const HeaderBar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        color: "var(--headerfooter-text-color",
        backgroundColor: "var(--headerfooter-background-color",
      }}
      className="
    sticky
    flex
    cursor-pointer
    justify-center
    items-center
    align-middle
    top-0
    w-full
    h-13
    border-b-1
    rounded-b-md
    z-50
    gap-2"
      onClick={() => {
        navigate({ to: "/" });
      }}
    >
      <p className="font-bold text-2xl">Tito Acevedo Libros</p>
    </div>
  );
};

export default HeaderBar;
