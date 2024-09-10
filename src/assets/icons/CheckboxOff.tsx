import * as React from "react";
import { SVGProps } from "react";
const SvgCheckboxOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.5 8A7.5 7.5 0 0 1 8 .5h8A7.5 7.5 0 0 1 23.5 8v8a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 16V8Z"
      fill="#F4F4F4"
    />
    <path
      d="M.5 8A7.5 7.5 0 0 1 8 .5h8A7.5 7.5 0 0 1 23.5 8v8a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 16V8Z"
      stroke="#DCDEE0"
    />
  </svg>
);
export default SvgCheckboxOff;
