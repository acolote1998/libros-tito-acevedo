type CustomButtonType = {
  link?: string;
  text: string;
  widthPorcentViewport: string;
  heightPorcentViewport: string;
  textSize: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  fontType: "normal" | "black" | "bold" | "extrabold" | "light" | "extralight";
  callBack?: () => Promise<void>;
};

const CustomButton = ({
  fontType,
  heightPorcentViewport,
  text,
  textSize,
  widthPorcentViewport,
  link,
  callBack,
}: CustomButtonType) => {
  return (
    <p
      onClick={() => {
        if (callBack) callBack();
      }}
      style={{
        width: `${widthPorcentViewport}vw`,
        height: `${heightPorcentViewport}vh`,
      }}
      className={`text-center p-4 cursor-pointer text-${textSize} bg-orange-300 font-${fontType} rounded-lg`}
    >
      <a href={link} target="_blank">
        {text}
      </a>
    </p>
  );
};

export default CustomButton;
