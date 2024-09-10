import * as React from "react";
import { SVGProps } from "react";
const SvgCheckboxOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#checkbox_on_svg__a)">
      <path
        d="M0 8a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
        fill="#526ED3"
      />
      <path
        d="m6 12 4.243 4.243 8.484-8.486"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="checkbox_on_svg__a">
        <path
          d="M0 8a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
          fill="#fff"
        />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckboxOn;
