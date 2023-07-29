import styled from "styled-components";

export const StackCardStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-gray-two);
  position: relative;

  p {
    opacity: 0;
    transition: all 0.5s;
    color: #f5f5f5;
    transform: scale(0);
    background-color: var(--color-red);
    padding: 5px;
    border-radius: 8px;

    text-align: center;

    position: absolute;
    bottom: -40px;
    z-index: 1;
  }

  :hover {
    p {
      opacity: 1;
      transform: scale(1);
    }

    p::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      border-style: solid;
      border-width: 0 8px 8px 8px;
      border-color: transparent transparent var(--color-red) transparent;
    }
  }
`;
