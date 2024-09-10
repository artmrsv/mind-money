import * as React from "react";
import { SVGProps } from "react";
const SvgSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 4 3.828 6.83l5.657-5.657"
      stroke="#51D85E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSuccess;
