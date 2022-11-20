import Card from 'react-bootstrap/Card';
import Photo2 from './carosel2';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

function About() {
  const navigate = useNavigate();

  let myStyle = {
    minHeight: "88vh",
    display: "flex",
    flexDirection: "column"
  }
  return (
    <>
      <button className="btn btn-primary" onClick={() => navigate(-1)}><BiArrowBack className="me-1" />Previous Page</button>
      <div className='text-center' style={myStyle}>
        <Card>
          <Card.Header><h1><i>CodeWithReshab</i></h1></Card.Header>
          <Card.Body>
            <Card.Title>About this website</Card.Title>
            <Card.Text>
              With supporting of my honourable teacher's, i finally make it for real.
            </Card.Text>
          </Card.Body>
        </Card>
        <Photo2 />
      </div>
    </>
  );
}

export default About;