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
    <a
      style={{ color: "var(--button-text-color)" }}
      href={link}
      target="_blank"
    >
      <p
        onClick={() => {
          if (callBack) callBack();
        }}
        style={{
          width: `${widthPorcentViewport}vw`,
          height: `${heightPorcentViewport}vh`,
          backgroundColor: "var(--button-background-color)",
          color: "var(--button-text-color)",
          borderColor: "var(--button-border-color)",
        }}
        className={`flex border-1 items-center justify-center text-center cursor-pointer text-${textSize} font-${fontType} rounded-lg`}
      >
        {text}
      </p>
    </a>
  );
};

export default CustomButton;
