import styled from "styled-components";

export const ListStacksStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;

  margin: 50px 0;

  @media (max-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
`;
