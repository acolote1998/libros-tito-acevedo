import { useNavigate } from "@tanstack/react-router";

const HeaderBar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="
    sticky
    flex
    cursor-pointer
    justify-center
    items-center
    align-middle
    top-0
    bg-orange-200
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
      <p className="font-bold">Tito Acevedo Libros</p>
    </div>
  );
};

export default HeaderBar;
