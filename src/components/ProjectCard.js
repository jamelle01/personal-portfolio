import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          {projLink && (
            <a href='https://mlbb-html-css-project.vercel.app/project%20web/home%20page/home.html'>
              <br></br>VISIT
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
