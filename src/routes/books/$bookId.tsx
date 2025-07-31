import { createFileRoute, useSearch } from "@tanstack/react-router";
import useBook from "../../hooks/useBook";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/books/$bookId")({
  component: RouteComponent,
  validateSearch: (search) => {
    return {
      region: String(search.region ?? ""),
    };
  },
});

function RouteComponent() {
  const { bookId } = Route.useParams();
  const { region } = useSearch({ strict: false });
  const { data: bookData } = useBook(bookId);
  const [digitalLink, setDigitalLink] = useState<string>();
  const [physicalLink, setPhysicalLink] = useState<string>();
  useEffect(() => {
    if (region && bookData) {
      const finalDigitalLink = bookData?.digital.find(
        (d) => d.region.toLowerCase() === region?.toLocaleLowerCase()
      )?.link;
      const finalPhysicalLink = bookData?.physical.find(
        (p) => p.region.toLowerCase() === region?.toLocaleLowerCase()
      )?.link;

      setDigitalLink(finalDigitalLink);
      setPhysicalLink(finalPhysicalLink);
    }
  }, [region, bookData]);

  return (
    <div className="flex flex-col items-center mt-7 gap-5 text-center pl-3 pr-3">
      <h1 className="bg-orange-200 text-5xl p-4 rounded-lg">
        {bookData && bookData.title}
      </h1>
      <div className="flex flex-col text-center bg-orange-200 p-3 rounded-lg gap-2">
        <div className="flex gap-2 ">
          <img className="h-72" src={bookData?.imgBack} />
          <img className="h-72" src={bookData?.imgFront} />
        </div>
        <p className="text-lg w-[90vw] max-h-[15vh] overflow-y-scroll">
          {bookData && bookData.desc}
        </p>
      </div>
      <div className="flex flex-col text-center text-2xl bg-orange-200 p-3 rounded-lg">
        <p>CONSEGUI TU LIBRO</p>
      </div>
      <div className="flex text-center gap-2">
        <p className="text-2xl bg-orange-200 font-extrabold p-3 rounded-lg">
          <a href={digitalLink ?? bookData?.digital?.[0]?.link} target="_blank">
            DIGITAL
          </a>
        </p>
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
