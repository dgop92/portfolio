import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { fadeInAnimation } from "./animations";

export function withScrollFadeInAnimation(Component, threshold = 0.4) {
  const ComponentWithAnimation = styled(Component)`
    ${fadeInAnimation}
  `;

  return ({ children, ...props }) => {
    const { ref, inView } = useInView({
      threshold,
      triggerOnce: true,
    });
    return (
      <ComponentWithAnimation ref={ref} animate={inView} {...props}>
        {children}
      </ComponentWithAnimation>
    );
  };
}
