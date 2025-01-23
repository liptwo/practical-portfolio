
import {Container, Col, Row} from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import mete1 from '../assets/img/meter1.svg'
import mete2 from '../assets/img/meter2.svg'
import mete3 from '../assets/img/meter3.svg'
import mete4 from '../assets/img/meter2.svg'
import colorShape from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Skills = () => {
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>

                        <div className="skill-bx">
                        <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__bounceIn":""}>
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            </div>}
                            </TrackVisibility>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={mete1} alt="Img"></img>
                                    <h5>Web UI</h5>
                                </div>
                                <div className="item">
                                    <img src={mete2} alt="Img"></img>
                                    <h5>Coder</h5>
                                </div>
                                <div className="item">
                                    <img src={mete3} alt="Img"></img>
                                    <h5>JS skill</h5>
                                </div>
                                <div className="item">
                                    <img src={mete4} alt="Img"></img>
                                    <h5>Pro nood</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorShape}></img>
        </section>
    )
}
export default Skills;