import { createFileRoute, useSearch } from "@tanstack/react-router";
import type { SpecificBook } from "../../types/types";

export const Route = createFileRoute("/books/$bookId")({
  component: RouteComponent,
  validateSearch: (search) => {
    return {
      region: String(search.region ?? ""),
    };
  },
});

function RouteComponent() {
  const mockedBook: SpecificBook = {
    desc: "Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test Descripcion test ",
    title: "Bares",
    digital: [
      { link: "http://www.google.com", region: "US" },
      { link: "http://www.google.com", region: "UK" },
      { link: "http://www.google.com", region: "DE" },
      { link: "http://www.google.com", region: "FR" },
      { link: "http://www.google.com", region: "ES" },
      { link: "http://www.google.com", region: "IT" },
      { link: "http://www.google.com", region: "NL" },
      { link: "http://www.google.com", region: "JP" },
      { link: "http://www.google.com", region: "BR" },
      { link: "http://www.google.com", region: "CA" },
      { link: "http://www.google.com", region: "MX" },
      { link: "http://www.google.com", region: "AU" },
      { link: "http://www.google.com", region: "IN" },
    ],
    physical: [
      { link: "http://www.google.com", region: "US" },
      { link: "http://www.google.com", region: "UK" },
      { link: "http://www.google.com", region: "DE" },
      { link: "http://www.google.com", region: "FR" },
      { link: "http://www.google.com", region: "ES" },
      { link: "http://www.google.com", region: "IT" },
      { link: "http://www.google.com", region: "NL" },
      { link: "http://www.google.com", region: "PL" },
      { link: "http://www.google.com", region: "SE" },
      { link: "http://www.google.com", region: "JP" },
      { link: "http://www.google.com", region: "CA" },
      { link: "http://www.google.com", region: "AU" },
    ],
    imgFront: "/books/baresTapa.png",
    imgBack: "/books/baresContraTapa.png",
  };
  const { bookId } = Route.useParams();
  const { region } = useSearch({ strict: false });

  const digitalLink = mockedBook.digital.find(
    (d) => d.region.toLowerCase() === region?.toLocaleLowerCase()
  )?.link;
  const physicalLink = mockedBook.physical.find(
    (p) => p.region.toLowerCase() === region?.toLocaleLowerCase()
  )?.link;

  return (
    <div className="flex flex-col items-center mt-7 gap-10">
      <h1 className="bg-orange-200 text-5xl p-4 rounded-lg">
        {mockedBook.title}
      </h1>
      <div className="flex flex-col text-center bg-orange-200 p-3 rounded-lg gap-2">
        <div className="flex gap-2 ">
          <img className="h-72" src={mockedBook.imgFront} />
          <img className="h-72" src={mockedBook.imgBack} />
        </div>
        <p className="text-lg w-[90vw] h-[15vh] overflow-y-scroll">
          {mockedBook.desc}
        </p>
      </div>
      <div className="flex flex-col text-center text-2xl bg-orange-200 p-3 rounded-lg gap-2">
        <p>CONSEGUI TU LIBRO</p>
      </div>
      <div className="flex text-center gap-2">
        {digitalLink && (
          <p className="text-2xl bg-orange-200 font-extrabold p-3 rounded-lg">
            <a href={digitalLink} target="_blank">
              DIGITAL
            </a>
          </p>
        )}
        {physicalLink && (
          <p className="text-2xl font-extrabold bg-orange-200 p-3 rounded-lg">
            <a href={physicalLink} target="_blank">
              FISICO
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
