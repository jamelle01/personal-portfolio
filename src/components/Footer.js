import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" m={2}>
      <Container m={2}>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h3 className="text-white">JERAMELLETATAD</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://web.facebook.com/jeramelletatad"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
