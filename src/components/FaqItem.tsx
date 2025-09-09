import type { FaqQuestionType } from "../types/types";
const FaqItem = ({ questionAnswer, questionTitle }: FaqQuestionType) => {
  return (
    <details className="my-2 bg-[var(--headerfooter-background-lighter-color)] rounded-lg p-2">
      <summary className="md:text-center">{questionTitle}</summary>
      <p className="text-left md:text-center bg-[var(--headerfooter-background-color)] text-[var(--headerfooter-text-color)] rounded-sm p-1 text-sm tracking-tight">
        {questionAnswer}
      </p>
    </details>
  );
};

export default FaqItem;
