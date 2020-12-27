import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;

  width: 100%;
  height: 90vh;

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  header {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 7vh;

      @media (max-width: 750px) {
        font-size: 4vh;
      }

      span {
        font-size: 10vh;
      }
    }

    p {
      margin-top: 5vh;
      font-size: 3vh;
    }

    button {
      margin-top: 5vh;
    }
  }

  img {
    max-width: 700px;

    margin: 5vh;

    @media (max-width: 750px) {
      height: 25%;
      margin: 0;
    }
  }
`;
