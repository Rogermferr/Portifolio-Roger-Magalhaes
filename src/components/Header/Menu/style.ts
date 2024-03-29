import styled from 'styled-components'
import { HeaderStyleProps } from './../interfaces'

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

    transition: all 0.5s;

    &.home_link:hover {
      color: var(--color-red);
      border: solid 2px var(--color-red);
    }

    &.contact_link:hover {
      color: var(--color-red);
      border: solid 2px var(--color-red);
    }

    &.projects_link:hover {
      color: var(--color-red);
      border: solid 2px var(--color-red);
    }
  }
  button {
    color: var(--color-white);
    background: transparent;
    border: none;
    transition: all 0.5s;

    :hover {
      color: var(--color-red);
      transform: scale(1.2);
    }
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

    transform: scaleY(${(props) => (props.isActive ? '1' : '0')});
    transform-origin: top;
    transition: transform 0.5s cubic-bezier(0.64, 0.02, 0.41, 1.25);

    a {
      max-width: 50%;
    }
  }
`
