import { Container, Row, Col} from 'react-bootstrap';
import Slider from './WorkSlider';

function Work() {  
    return (
      <div className="py-130 overflow-hidden pb-0"  id="work">
          <Container>
                <Row>
                    <Col md={12} className="mb-md-4 mb-2">
                        <div className="section-title">Our work</div>    
                        <h2>Our Recent <span>Projects</span></h2>
                    </Col>
                    <Col md={12}>
                        <Slider />
                    </Col>
                </Row>
          </Container>
      </div>
    );
  }

  export default Work;