import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 3rem;
    position: absolute;
    z-index: 3;
    top: 30%;
    left: 15%;
    text-align: center;

    @media (max-width: 750px) {
      left: 5%;
    }
  }
`;
