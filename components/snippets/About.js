import Image from 'next/image'
import { Container, Row, Col} from 'react-bootstrap';


function About() {
  
    return (
      <div className="py-130 pb-0"  id="about">
          <Container>
              <Row className="align-items-center">
                  <Col md={7} lg={6} className="mb-md-0 mb-4 pe-lg-5">
                    <div className="section-title">About us</div>    
                    <h2>Enduring <span>value and the potential</span> to become timeless</h2>
                    <p>CFV GROUP was founded with a single mission: to build and renovate structures with enduring value and the potential to become timeless. Our team of creative professionals carefully evaluate each project in order to adhere to both financial and time constraints.</p>
                  </Col>
                  <Col md={5} lg={6}>
                    <Image src="/about-image.webp" width="540" height="375" alt="about" />
                  </Col>
              </Row>
          </Container>
      </div>
    );
  }
  
  export default About;