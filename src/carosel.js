import Carousel from 'react-bootstrap/Carousel';
import myPhoto from './Images/IMG20220602095918.jpg';
import myPhoto2 from './Images/pic_bulbon.gif';
import myPhoto3 from './Images/pic_bulboff.gif';

function Photo() {
  let myStyle = {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column"
  }

  return (
    <div className='' style={myStyle}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={myPhoto}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>BMW</h3>
            <p>My First time when i see a company's 18th anniversary</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={myPhoto2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={myPhoto3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Photo;