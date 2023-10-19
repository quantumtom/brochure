import './Research.css';
import Container from "react-bootstrap/container"
import { Accordion, Col, Row } from "react-bootstrap";

function Research() {
  return (
      <Container className={"text-justify"}>
        <h5>Research</h5>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={"0"}>
            <Accordion.Header>Rampage Flights 1 & 3 odds (turbo)</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col md={6} lg={5}>
                  <div className="sketchfab-embed-wrapper">
                    <iframe title="Rampage Flights 1 & 3 odds (turbo)" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f504a44a1822451994e410180ef493c1/embed"></iframe>
                  </div>
                </Col>
                <Col md={6} lg={7}>
                  <p>We made 3-D models of the canyon trails used for the Red Bull "Rampage" downhill mountain bike event.</p>
                  <p>These ridges sit oppositte Hurricane Mesa, just outside the town of Virgin, Utah.</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
);
}

export default Research;