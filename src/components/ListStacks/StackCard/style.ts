import styled from "styled-components";

export const StackCardStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-gray-two);

  p {
    opacity: 0;
    transition: all 0.5s;
    color: var(--color-white);
  }

  :hover {
    p {
      opacity: 1;
    }
  }
`;
