import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--color-black);
  background: -webkit-linear-gradient(
    to right,
    var(--color-black),
    var(--color-gray)
  );
  background: linear-gradient(to right, var(--color-black), var(--color-gray));

  width: 100%;
  padding: 20px 0;
  box-shadow: 0 0 0 2px var(--color-red);

  color: var(--color-white);

  /* position: fixed;
  bottom: 0; */

  div {
    display: flex;
    margin: 0 150px;

    p {
      font-size: 1rem;
      text-align: center;
    }

    a {
      color: var(--color-white);
    }
  }

  div:nth-child(1) {
    flex-direction: column;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;

    div {
      margin: 0 16px;
    }
  }
`;
