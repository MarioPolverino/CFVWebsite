import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer text-center">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col md={'auto'} className="text-center mb-md-0 mb-4" xs={12}>
                        <Image src="/logo.svg" className="logo" width="145" height="61" alt="logo" />
                    </Col>
                    <Col md={'auto'} xs={'auto'}>
                        ©2021 by CFV GROUP. All rights reserved.
                    </Col>
                    <Col md={'auto'} xs={'auto'}>
                        <Link href="/"><a><Image src="/instagram.png" className="img-fluid" width="29" height="29" alt="icon" /></a></Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;