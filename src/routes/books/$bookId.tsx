import { createFileRoute, useSearch } from "@tanstack/react-router";
import useBook from "../../hooks/useBook";
import { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";

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
    <div className="flex flex-col items-center mt-7 gap-3 text-center pl-3 pr-3">
      <h1
        style={{
          color: "var(--item-text-color)",
          backgroundColor: "var(--item-background-color)",
        }}
        className=" text-5xl p-4 rounded-lg"
      >
        {bookData && bookData.title}
      </h1>
      <div
        style={{
          color: "var(--item-text-color)",
          backgroundColor: "var(--item-background-color)",
        }}
        className="flex flex-col text-center p-3 rounded-lg gap-2"
      >
        <div className="flex gap-2 ">
          <img className="h-72" src={bookData?.imgBack} />
          <img className="h-72" src={bookData?.imgFront} />
        </div>
        <p className="text-lg w-[90vw] max-h-[15vh] overflow-y-scroll">
          {bookData && bookData.desc}
        </p>
      </div>
      <div
        style={{
          color: "var(--item-text-color)",
          backgroundColor: "var(--item-background-color)",
        }}
        className="flex flex-col text-center text-2xl  p-3 rounded-lg"
      >
        <p className="text-2xl font-bold p-4 rounded-lg tracking-wide uppercase shadow-inner">
          CONSEGUI TU LIBRO!
        </p>
      </div>
      <div className="flex text-center gap-2">
        <CustomButton
          fontType="extrabold"
          textSize="2xl"
          link={digitalLink ?? bookData?.digital?.[0]?.link}
          heightPorcentViewport="7"
          widthPorcentViewport="30"
          text="DIGITAL"
        />
        {physicalLink && (
          <CustomButton
            fontType="extrabold"
            textSize="2xl"
            link={physicalLink}
            heightPorcentViewport="7"
            widthPorcentViewport="30"
            text="FISICO"
          />
        )}
      </div>
    </div>
  );
}
