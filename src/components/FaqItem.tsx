import type { FaqQuestionType } from "../types/types";
const FaqItem = ({ questionAnswer, questionTitle }: FaqQuestionType) => {
  return (
    <details className="my-2">
      <summary>{questionTitle}</summary>
      <p className="bg-[var(--headerfooter-background-color)] text-[var(--headerfooter-text-color)] rounded-sm p-1 text-sm tracking-tight">
        {questionAnswer}
      </p>
    </details>
  );
};

export default FaqItem;
