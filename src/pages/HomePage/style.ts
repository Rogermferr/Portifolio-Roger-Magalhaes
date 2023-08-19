import styled from "styled-components";

export const HomePageStyle = styled.div`
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin: 150px 0;

  height: 100%;

  @media (max-width: 900px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    width: 100%;

    section {
      width: 100%;
    }
  }
`;
