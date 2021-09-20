import Image from 'next/image'
import { Container, Row, Col} from 'react-bootstrap';

function Services() {
  
    return (
      <div id="services">
          <Container>
            <div className="services text-center">
              <Row>
                <Col md={4} xs={12}>
                  <Image src="/stairs.png" width="65" height="65" alt="stairs" />
                  <h4>Interior Design</h4>
                  <h6>Customized to Your Preferences</h6>
                </Col>
                <Col md={4} xs={12}>
                  <Image src="/helmet.png" width="65" height="65" alt="stairs" />
                  <h4>Construction Management</h4>
                  <h6>Efficient. Reliable. Experienced.</h6>
                </Col>
                <Col md={4} xs={12}>
                  <Image src="/architecture.png" width="65" height="65" alt="stairs" />
                  <h4>Development</h4>
                  <h6>It’s All in the Details</h6>
                </Col>
              </Row>
            </div>
          </Container>
      </div>
    );
  }
  
  export default Services;