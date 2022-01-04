import { keyframes, css } from "styled-components";

const fadeInKeyFrames = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeIn = css`
  animation: ${fadeInKeyFrames} 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const fadeInAnimation = css`
  opacity: 0;
  ${(props) => props?.animate && fadeIn}
`;
