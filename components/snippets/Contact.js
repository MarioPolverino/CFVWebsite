import Image from 'next/image'
import { Container, Row, Col} from 'react-bootstrap';

import ContactForm from '../ContactForm'

function About() {
  
    return (
      <div className="py-130"  id="contact">
          <Container>
              <Row>
                  <Col md={7} lg={6} className="mb-md-0 mb-4">
                    <div className="section-title">Contact us</div>    
                    <h2 className="text-lg">We’re ready to help with <span>your project</span></h2>
                    <div className="contact-image">
                        <Image src="/contact-image.png" width="375" height="430" alt="about" />
                    </div>
                  </Col>
                  <Col md={5} lg={6}>
                    <ContactForm />
                  </Col>
              </Row>
          </Container>
      </div>
    );
  }
  
  export default About;