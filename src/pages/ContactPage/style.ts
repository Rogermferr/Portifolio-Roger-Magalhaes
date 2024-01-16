import styled from 'styled-components'

export const ContactPageStyle = styled.div`
  color: var(--color-white);
  padding: 150px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  scroll-margin-top: 80px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
