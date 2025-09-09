import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="var(--footer-icon-line-color)"
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm9.303 1.394c-.071.32.2.606.545.606h2.193a.613.613 0 0 0 .565-.394c.091-.227.406-.639.648-.854.229-.24.467-.467.702-.69.926-.879 1.798-1.706 1.798-3.152 0-2.507-2.172-3.91-4.483-3.91-1.767 0-4.207.806-4.687 3.504-.097.543.364.996.916.996h1.412c.527 0 .92-.424 1.1-.918.174-.476.526-.827 1.259-.827 1.336 0 1.335 1.469.564 2.43-.292.362-.633.683-.97 1-.685.645-1.355 1.275-1.562 2.21ZM14 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export { SvgComponent as QuestionIcon };
