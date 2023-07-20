import styled from "styled-components";
import { HeaderStyleProps } from "./../interfaces";

export const MenuStyle = styled.nav<HeaderStyleProps>`
  display: flex;
  gap: 16px;
  margin-right: 150px;

  span {
    opacity: 0;
    color: var(--color-white);
  }

  a {
    color: var(--color-white);
    font-size: 1.25rem;
    text-align: center;

    border: solid 2px transparent;
    border-radius: 20px;

    padding: 8px;
    width: 100%;
    transition: all 1s;

    &.home_link {
      color: ${(props) =>
        props.pathname === "/" ? "var(--color-red)" : "var(--color-white)"};

      border: ${(props) =>
        props.pathname === "/" ? "solid 2px var(--color-red)" : "none"};
    }

    &.contact_link {
      color: ${(props) =>
        props.pathname === "/contact"
          ? "var(--color-red)"
          : "var(--color-white)"};

      border: ${(props) =>
        props.pathname === "/contact" ? "solid 2px var(--color-red)" : "none"};
    }

    &.projects_link {
      color: ${(props) =>
        props.pathname === "/projects"
          ? "var(--color-red)"
          : "var(--color-white)"};

      border: ${(props) =>
        props.pathname === "/projects" ? "solid 2px var(--color-red)" : "none"};
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    position: fixed;
    top: 85px;
    right: -30px;
    z-index: 100;

    background: var(--color-black);
    background: -webkit-linear-gradient(
      to right,
      var(--color-black),
      var(--color-gray)
    );
    background: linear-gradient(
      to right,
      var(--color-black),
      var(--color-gray)
    );

    padding: 16px;
    border-radius: 8px;
    margin-right: 32px;

    transform: ${(props) =>
      props.isActive ? "translateX(0)" : "translateX(140px)"};
    transition: cubic-bezier(0.64, 0.02, 0.41, 1.25) 1s;
  }
`;
