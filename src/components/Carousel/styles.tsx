import styled from "styled-components";

export const Container = styled.div`
  .slick-dots {
    bottom: 10px;
  }

  .slick-prev {
    z-index: 100;
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-slide {
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
      padding: 2vh;
    }
  }

  .slick-dots {
    font-size: 1.5vh;

    button:before {
      color: #fff;
    }

    li.slick-active button:before {
      color: #fff;
    }
  }

  img {
    width: 100%;
    max-width: 70vh;
  }

  h3 {
    text-align: center;
    color: #fff;
    font-size: 3vh;

    margin-top: 3vh;
  }

  p {
    text-align: center;
    color: #fff;
    font-size: 2vh;

    margin-top: 2vh;
  }
`;
