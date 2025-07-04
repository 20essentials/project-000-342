/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/css";

const fadeIn = keyframes`
  0% {
    clip-path: circle(0% at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
  }
`;

const globalStyle = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue';
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
  }

  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    background-image: linear-gradient(to bottom, var(--clr), var(--clr2));
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 10000px;
    --clr: #070915;
    --clr2: #070915;
  }

  @view-transition {
    navigation: auto;
  }

  section {
    background-image: var(--bg);
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    display: flex;
    view-transition-name: section;
  }
  section::before,
  section::after {
    content: '';
    display: block;
    width: 5vmax;
    height: 5vmax;
    position: absolute;
    top: 50%;
    pointer-events: none;
    background-image: url('assets/arrow.png');
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    filter: invert(1);
  }
  section::before {
    left: 2vmax;
    transform: translateY(-50%) scaleX(-1);
  }
  section::after {
    right: 2vmax;
    transform: translateY(-50%);
  }
  section a {
    width: 50%;
    height: 100%;
    display: block;
    background-color: transparent;
  }

  ::view-transition-new(section) {
    animation: ${fadeIn} 1s ease forwards;
  }
  ::view-transition-old(section) {
    animation: ${fadeIn} 1s ease reverse forwards;
  }
`;

const sectionStyle = css`
  --bg: url(assets/img-1.avif);
`;

export default function App() {
  return (
    <>
      <style>{globalStyle}</style>
      <section className={sectionStyle}>
        <a href="index7.html"></a>
        <a href="index2.html"></a>
      </section>
    </>
  );
}
