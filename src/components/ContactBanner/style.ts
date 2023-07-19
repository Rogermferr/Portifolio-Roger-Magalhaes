import styled from "styled-components";

export const ContactBannerStyle = styled.section`
  width: 50%;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: var(--color-gray-two);
  }

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 2.5rem;
    }
  }
`;
