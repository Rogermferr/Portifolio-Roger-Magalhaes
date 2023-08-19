import styled from "styled-components";

export const CardStyle = styled.li`
  height: 100%;
  width: 100%;

  margin: 0 auto;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;

    background-color: var(--color-transparent);
    transform: translateY(100%);
    transition: all 0.5s ease;

    position: absolute;
    top: 0;
    left: 0;
    color: var(--color-white);
    text-align: center;

    width: 100%;
    height: 100%;

    border-radius: 20px;

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
    }

    p {
      width: 80%;
      font-size: 1rem;
    }

    a {
      color: var(--color-red);
      font-size: 48px;
      font-weight: bold;
    }
  }

  :hover {
    div {
      top: 0;
      transform: translateY(0);
    }
  }

  @media (max-width: 769px) {
    div {
      gap: 8px;

      p {
        display: none;
      }

      a {
        font-size: 32px;
      }
    }
  }
`;
