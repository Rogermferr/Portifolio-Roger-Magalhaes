import styled from "styled-components";

export const ListProjectsStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  margin: 150px 16px;

  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    overflow-x: auto;
  }
`;
