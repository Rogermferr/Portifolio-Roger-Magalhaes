import styled from 'styled-components'

export const ContactStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;

  color: var(--color-white);

  div {
    display: flex;
    gap: 16px;

    img {
      width: 100px;
      height: 100px;
    }

    div {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 1.5rem;
      }

      a {
        color: var(--color-gray-two);
        font-weight: bold;
      }
    }
  }
`
