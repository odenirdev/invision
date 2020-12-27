import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --gray:  #707070;
    --blue:  #2196f3;
    --red:  #f44336;

    --primary-color: #01b2a8;
    --secundary-color: #FFF;

    --content-font: Muli, sans-serif;
    --title-font: Nunito, sans-serif;
    --bg-color: #FFFFFF;
    --content-color: var(--gray);
    --title-color: #000000;

    --shadow: 1px 1px 3px -1px #000;

    font-size: 150%;

    @media (max-width: 750px) {
      font-size: 110%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    background-color: var(--bg-color);
    color: var(--content-color);

    font-family: var(--content-font);
    font-size: 2vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--title-font);
    color: var(--title-color);
  }
`;
