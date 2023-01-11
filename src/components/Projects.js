import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "MLBB Heroes",
      description: "HTML/css Midterm Project",
      imgUrl:
        "https://res.cloudinary.com/durortebu/image/upload/v1673447068/folder/jkcuxwojrdpwl3kzhqjd.png",
      projLink:
        "https://mlbb-html-css-project.vercel.app/project%20web/home%20page/home.html",
    },
    {
      title: "Higalaay 2022",
      description: "Acquaintance Party Layout",
      imgUrl:
        "https://res.cloudinary.com/durortebu/image/upload/v1673447056/folder/fp8injj9fcam2fzqkqj9.jpg",
    },
    {
      title: "MR&MS BISU INTRAMURALS 2022",
      description: "Mr&Ms Intrams Banner layout",
      imgUrl:
        "https://res.cloudinary.com/durortebu/image/upload/v1673447064/folder/jkfgeqxae7a6cvkt0cpx.jpg",
    },
    {
      title: "BISU INTRAMURAL 2022",
      description: "Bisu Intramural banner layout",
      imgUrl:
        "https://res.cloudinary.com/durortebu/image/upload/v1673447046/folder/ncoe87c0jhsz3e8a0vsw.jpg",
    },
    {
      title: "BISU DAY SPORTFEST",
      description: "Design/Layout for Sportfest managers",
      imgUrl:
        "https://res.cloudinary.com/durortebu/image/upload/v1673447043/folder/zkb2vdpyukoxkychv6pp.jpg",
    },
  ];

  return (
    <section className='project' id='project'>
      <Container id='projects'>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='section'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  );
};
