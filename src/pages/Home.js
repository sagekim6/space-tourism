import { memo } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Mobile from "../assets/home/background-home-mobile.jpg";
import Tablet from "../assets/home/background-home-tablet.jpg";
import Desktop from "../assets/home/background-home-desktop.jpg";

const Home = () => {
  return (
    <HomeBg className="bg-container">
      <Header />
      <main id="content" className="Home">
        <div>
          <h1 className="Intro">
            So, you want to travel to <span>Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <button className="Explore-btn" tabIndex="0">
            Explore
          </button>
        </div>
      </main>
    </HomeBg>
  );
};

const HomeBg = styled.div`
  background-image: url("${Mobile}");
  background-position: bottom center;
  @media (min-width: 35em) {
    background-position: center center;
    background-image: url("${Tablet}");
  }
  @media (min-width: 45em) {
    background-image: url("${Desktop}");
  }
`;

export default memo(Home);
