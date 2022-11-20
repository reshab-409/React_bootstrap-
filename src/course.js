import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import one from './Images/one.jfif'
import two from './Images/node.webp'
import three from './Images/three.png'
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";


function Course() {
  const navigate = useNavigate();

  return (
    <>
      <button className="btn btn-primary" onClick={() => navigate(-1)}><BiArrowBack className="me-1" />Previous Page</button>
      <div className='text-center'>
        <Card>
          <Card.Header><h1><i>MERN Developement</i></h1></Card.Header>
          <Card.Body>
            <Card.Title>About Web Developement</Card.Title>
            <Card.Text>
              You need to follow the  courses down below if you want to become a webDeveloper.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className='container my-5'>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={one} />
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>
                React is a JavaScript library developed by Facebook which,
                among other things, was used to build Instagram.com.
                Its aim is to allow developers to easily create fast user interfaces
                for websites and applications alike. The main concept of React. js is virtual DOM.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={two} />
            <Card.Body>
              <Card.Title>JS Node</Card.Title>
              <Card.Text>
                Node allows developers to write JavaScript code that runs
                directly in a computer process itself instead of in a browser.
                Node can, therefore, be used to write server-side applications with
                access to the operating system, file system, and everything else
                required to build fully-functional applications.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={three} />
            <Card.Body>
              <Card.Title>Microservices</Card.Title>
              <Card.Text>
                Microservices are an architectural approach to creating cloud applications.
                Each application is built as a set of services, and each service runs in
                its own processes and communicates through APIs. The evolution that led to
                cloud microservices architecture began more than 20 years ago.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default Course;