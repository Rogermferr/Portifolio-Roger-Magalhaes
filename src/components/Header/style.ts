import styled from "styled-components";

export const HeaderStyle = styled.header`
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
  box-shadow: 0 2px 0 var(--color-red);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-white);
    margin-left: 150px;
  }

  span {
    color: var(--color-white);
    display: none;
  }

  @media (max-width: 900px) {
    h1 {
      margin-left: 16px;
    }

    span {
      margin-right: 16px;
      display: block;
      cursor: pointer;
    }
  }
`;