import * as React from "react"

const Information = (props) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title />
    <g data-name="Layer 2" fill="#1f97ae">
      <path d="M16 12a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm0-2Z" />
      <path d="M16 29a13 13 0 1 1 13-13 13 13 0 0 1-13 13Zm0-24a11 11 0 1 0 11 11A11 11 0 0 0 16 5Z" />
      <path d="M16 24a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v6a2 2 0 0 1-2 2Zm0-8Z" />
    </g>
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h32v32H0z"
    />
  </svg>
);

export default Information
