import styled from "styled-components";

export const PresentationStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 2rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 32px;

    a {
      color: var(--color-white);
      transition: all 0.5s;
    }

    a:hover {
      transform: scale(1.2);
    }

    a:nth-child(1) {
      padding: 16px;
      background-color: var(--color-red);
      border-radius: 20px;
      font-weight: bold;
    }

    a:nth-child(2) {
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
