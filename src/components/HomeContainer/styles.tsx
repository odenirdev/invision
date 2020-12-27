import styled from "styled-components";

import { Aside } from "react-og-navbar";
import BackgroundImage from "../../assets/images/background.svg";

export const Container = styled.div`
  .react-og-aside {
    z-index: 2;
  }

  .react-og-aside-main {
    position: relative;
    z-index: 1;
  }

  .react-og-aside-main::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: -1;
    background: url(${BackgroundImage}) no-repeat bottom right;
    background-attachment: fixed;
    background-size: 1500px auto;
  }

  .react-og-aside span {
    font-size: 1rem;
  }
`;

export const AsideBottom = styled(Aside.Bottom)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
