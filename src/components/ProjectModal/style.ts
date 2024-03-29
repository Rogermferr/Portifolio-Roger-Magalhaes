import styled from 'styled-components'

export const ProjectModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100vw;
  height: 100vh;

  background-color: #0009;

  div {
    max-width: 500px;
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

    text-align: center;

    padding: 16px;
    border-radius: 20px;

    header {
      display: flex;
      justify-content: space-between;
      position: relative;
      box-shadow: 0 2px 0 0 var(--color-gray-two);
      padding-bottom: 16px;
      margin-bottom: 16px;

      h2 {
        color: var(--color-white);
        font-size: 2rem;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 30px;
        width: 30px;

        background-color: transparent;
        border: var(--color-white) solid 1px;
        border-radius: 50%;

        color: var(--color-white);

        transition: all 0.5s;

        :hover {
          color: var(--color-red);
          border: var(--color-red) solid 1px;
        }
      }
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 16px;
      height: 80%;
      color: var(--color-white);

      p {
        margin-top: 16px;
      }

      span {
        font-weight: bold;
      }

      .links_container {
        display: flex;
        justify-content: space-around;
        width: 100%;

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--color-white);

          font-size: 2rem;
          transition: all 1s;
          padding: 16px;

          :hover {
            color: var(--color-red);
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    div:nth-child(1) {
      width: 90%;
    }
  }
`
