import styled from "styled-components";

export const ProfileImageStyle = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;

  position: sticky;
  top: 100px;

  @media (max-width: 900px) {
    position: static;
  }
`;
