import styled from 'styled-components'

export const ContactPageStyle = styled.div`
  color: var(--color-white);
  padding: 150px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  width: 90%;
  margin: 0 auto;

  scroll-margin-top: 80px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
