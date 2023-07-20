import styled from "styled-components";

export const ContactPageStyle = styled.div`
  color: var(--color-white);
  margin: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;

    margin: 150px 16px;
  }
`;
