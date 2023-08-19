import styled from "styled-components";
import { HeaderStyleProps } from "./../interfaces";

export const MenuStyle = styled.nav<HeaderStyleProps>`
  display: flex;
  gap: 16px;
  margin-right: 50px;

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
  button {
    color: var(--color-white);
    background: transparent;
    border: none;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 16px 0;

    position: fixed;
    top: 70px;
    z-index: 1;

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

    border-radius: 8px;

    transform: scaleY(${(props) => (props.isActive ? "1" : "0")});
    transform-origin: top;
    transition: transform 0.5s cubic-bezier(0.64, 0.02, 0.41, 1.25);

    a {
      max-width: 50%;
    }
  }
`;
