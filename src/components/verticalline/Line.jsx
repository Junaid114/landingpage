import React from "react";
import "./Line.css";

const Line = () => {
  return (
    <div className="neon-container">
      <svg
        width="60"
        height="1027"
        viewBox="0 0 60 1027"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="28.5255"
          width="2.94907"
          height="484.009"
          rx="1.47453"
          fill="url(#paint0_linear_1_563)"
        />
        <g filter="url(#filter0_f_1_563)">
          <rect
            x="18"
            y="499.738"
            width="23.5925"
            height="27.5246"
            rx="11.7963"
            fill="#DC1E5E"
          />
        </g>
        <path
          d="M27.4 503.5H21.6C21.2686 503.5 21 503.769 21 504.1V507.9C21 508.231 21.2686 508.5 21.6 508.5H27.4C27.7314 508.5 28 508.231 28 507.9V504.1C28 503.769 27.7314 503.5 27.4 503.5Z"
          stroke="white"
        />
        <path
          d="M32.9 518.5H27.1C26.7686 518.5 26.5 518.769 26.5 519.1V522.9C26.5 523.231 26.7686 523.5 27.1 523.5H32.9C33.2314 523.5 33.5 523.231 33.5 522.9V519.1C33.5 518.769 33.2314 518.5 32.9 518.5Z"
          stroke="white"
        />
        <path
          d="M38.4 503.5H32.6C32.2686 503.5 32 503.769 32 504.1V507.9C32 508.231 32.2686 508.5 32.6 508.5H38.4C38.7314 508.5 39 508.231 39 507.9V504.1C39 503.769 38.7314 503.5 38.4 503.5Z"
          stroke="white"
        />
        <path
          d="M24.5 508.5V512C24.5 512.53 24.7107 513.039 25.0858 513.414C25.4609 513.789 25.9696 514 26.5 514H33.5C34.0304 514 34.5391 513.789 34.9142 513.414C35.2893 513.039 35.5 512.53 35.5 512V508.5M30 514V518.5"
          stroke="white"
        />
        <rect
          x="28.5255"
          y="542.991"
          width="2.94907"
          height="484.009"
          rx="1.47453"
          fill="url(#paint1_linear_1_563)"
        />
        <defs>
          <filter
            id="filter0_f_1_563"
            x="0.305603"
            y="482.043"
            width="58.9813"
            height="62.9135"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="8.8472"
              result="effect1_foregroundBlur_1_563"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_563"
            x1="30"
            y1="0"
            x2="30"
            y2="484.009"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="0.3" stop-color="#DC1E5E" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_563"
            x1="30"
            y1="542.991"
            x2="30"
            y2="1027"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.235111" stop-color="#DC1E5E" />
            <stop offset="1" stop-color="#1C090F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Line;
