import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media (max-width: 750px) {
    flex-direction: column-reverse;

    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  header {
    margin-top: 7vh;
    display: flex;
    justify-content: center;

    h1 {
      font: 3vh var(--content-font);
      color: var(--content-color);
    }
  }

  button {
    margin: 3vh auto 4vh;
  }

  a {
    color: var(--primary-color);
  }

  .carousel-container,
  .auth-content-container {
    width: 50%;
    height: 100vh;

    @media (max-width: 750px) {
      scroll-snap-align: end;
      width: 100%;
    }
  }

  .carousel-container {
    height: 100vh;
    background-color: #a9c5ba;
  }

  .auth-content-container {
    .auth-content-header {
      margin-top: 7vh;

      width: 100%;

      display: flex;

      h1 {
        width: fit-content;

        font-size: 3.5vh;
        margin-left: auto;
        margin-right: 12vh;

        font-family: var(--title-font);
        color: var(--title-color);
        font-weight: 700;
      }
    }
  }
`;
