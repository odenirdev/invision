import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import config from "./config.json";

import { Container } from "./styles";

import StatisticImage from "../../assets/images/statistic.png";
import ProgressData from "../../assets/images/progress_data.svg";
import SetupAnalytics from "../../assets/images/setup_analytics.svg";

const Carousel: React.FC = () => {
  return (
    <Container>
      <Slider {...config}>
        <div>
          <img src={StatisticImage} alt="Invision statistics" />
          <h3>Marcenas mattis egestas</h3>
          <p>
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </div>
        <div>
          <img src={ProgressData} alt="Progress data" />
          <h3>Neque porro quisquam</h3>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
        </div>
        <div>
          <img src={SetupAnalytics} alt="Setup analytics" />
          <h3>Maecenas sem risus</h3>
          <p>
            Maecenas sem risus, auctor ac condimentum vitae, sodales et nulla.
          </p>
        </div>
      </Slider>
    </Container>
  );
};

export default Carousel;
