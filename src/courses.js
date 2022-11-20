import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import p1 from './Images/course.jpg'
import { BiArrowBack } from "react-icons/bi";

function Cources() {
  const navigate = useNavigate();

  return (
    <>
      <button className="btn btn-primary" onClick={() => navigate(-1)}><BiArrowBack className="me-1" />Previous Page</button>
      <div className='container text-center my-3'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={p1} />
          <Card.Body>
            <Card.Title>JavaScript</Card.Title>
            <Card.Text>
              You only need to know minmum knowledge about computer basics and "C" language.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Step by step</ListGroup.Item>
            <ListGroup.Item>Exper teachers</ListGroup.Item>
            <ListGroup.Item>Easy to understand</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link as={Link} to="/course">Know more</Card.Link>
            <Card.Link href="https://en.wikipedia.org/wiki/JavaScript">Wikipedia</Card.Link>
          </Card.Body>
        </Card>

      </div>
    </>
  );
}

export default Cources;