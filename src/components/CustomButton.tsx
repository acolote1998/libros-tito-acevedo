type CustomButtonType = {
  link?: string;
  text: string;
  widthPorcentViewport: string;
  heightPorcentViewport: string;
  textSize: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  fontType: "normal" | "black" | "bold" | "extrabold" | "light" | "extralight";
};

const CustomButton = ({
  fontType,
  heightPorcentViewport,
  text,
  textSize,
  widthPorcentViewport,
  link,
}: CustomButtonType) => {
  return (
    <p
      className={`text-${textSize} bg-orange-200 font-${fontType} w-[${widthPorcentViewport}vw] h-[${heightPorcentViewport}vh] rounded-lg`}
    >
      <a href={link} target="_blank">
        {text}
      </a>
    </p>
  );
};

export default CustomButton;
