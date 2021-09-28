// import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';

// assets
import Services from '../components/snippets/Services';
import About from '../components/snippets/About';
import Work from '../components/snippets/Work';
import Contact from '../components/snippets/Contact';

export default function Home() {
  return (
    <>
      <div className="home-banner position-relative text-white">
        <Image src="/about-image.webp" width="1920" height="920" alt="banner" />
        <Container>
          <Row>
            <Col>
              <h3>Building a better</h3>
              <h1 className="text-uppercase">tomorrow</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Services />

      <About />

      <Work />
      <Contact />
    </>
  )
}
