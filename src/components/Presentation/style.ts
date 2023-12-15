import styled from "styled-components";

export const PresentationStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  h2:nth-child(2) {
    color: var(--color-red);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    position: relative;

    animation: typing 4s steps(50, end) 1s infinite;
  }

  h2:nth-child(2)::after {
    content: "_";
    display: inline-block;
    width: 10px;
    animation: blink 0.5s step-end infinite;
    opacity: 1;
    position: absolute;
    bottom: 0;
  }

  @keyframes typing {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;

  }

  p {
    font-size: 1rem;
    line-height: 150%;

  }

  div {
    display: flex;
    align-items: center;
    gap: 32px;

    a {
      color: var(--color-white);
      transition: all 0.5s;
      text-align: center;
    }

    a:hover {
      transform: scale(1.2);
    }

    a:nth-child(1) {
      color: #f5f5f5;
      padding: 16px;
      background-color: var(--color-red);
      border-radius: 20px;
      font-weight: bold;
    }

    a:nth-child(2),
    a:nth-child(3) {
      padding: 16px;
      border: solid 1px var(--color-white);
      border-radius: 20px;
      font-weight: bold;
    }
  }

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    padding: 0 16px;

    div {
      flex-direction: column;
    }
  }
`;
