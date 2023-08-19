import styled from "styled-components";

export const CardProjectsStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  color: var(--color-white);

  border: solid 2px var(--color-white);
  border-radius: 20px;
  padding: 16px;
  transition: all 1s;

  :hover {
    color: var(--color-red);
    border: solid 2px var(--color-red);
    transform: scale(1.1);
    cursor: pointer;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
  }

  @media (max-width: 900px) {
    :hover {
      transform: none;
    }

    h3 {
      width: 200px;
    }
  }
`;
