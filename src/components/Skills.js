import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Row, Col } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>About Me</h2>
              <p>
                I am Jeramelle Tatad, an undergraduate student of Bachelor of
                Science in Information Technology at Bohol Island State
                University - Balilihan Campus. My coursework has covered a broad
                range of IT topics such as programming languages, software
                development methodologies, web development, and data structures.
                I have a strong interest in web development, and I am eager to
                apply my knowledge and skills in a real-world setting through an
                internship opportunity.
              </p>
              <h2>Skills</h2>
              <h3>Programming Language</h3>
              <Row>
                <Col
                  className='mx-auto'
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{ maxWidth: "200px", minWidth: "200px" }}
                >
                  <CircularProgressbar value={40} text={`40%`} />
                  <h5>Javascript</h5>
                </Col>
                <Col
                  className='mx-auto'
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{ maxWidth: "200px", minWidth: "200px" }}
                >
                  <CircularProgressbar value={50} text={`50%`} />
                  <h5>HTML</h5>
                </Col>
                <Col
                  className='mx-auto'
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{ maxWidth: "200px", minWidth: "200px" }}
                >
                  <CircularProgressbar value={45} text={`45%`} />
                  <h5>CSS</h5>
                </Col>
                <Col
                  className='mx-auto'
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{ maxWidth: "200px", minWidth: "200px" }}
                >
                  <CircularProgressbar value={35} text={`35%`} />
                  <h5>Java</h5>
                </Col>
              </Row>
              <h3>Software/Others</h3>
              <Row>
                <Col
                  className='mx-auto'
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{ maxWidth: "200px", minWidth: "200px" }}
                >
                  <CircularProgressbar value={60} text={`60%`} />
                  <h5>Photoshop</h5>
                </Col>
                <Col
                  className='mx-auto'
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{ maxWidth: "200px", minWidth: "200px" }}
                >
                  <CircularProgressbar value={65} text={`65%`} />
                  <h5>VS code </h5>
                </Col>
                <Col
                  className='mx-auto'
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={2}
                  style={{ maxWidth: "200px", minWidth: "200px" }}
                >
                  <CircularProgressbar value={70} text={`70%`} />
                  <h5>MS Office</h5>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};
