import './Research.css';
import { Container, Accordion, Col, Row } from "react-bootstrap";
import TestRenderer from 'react-test-renderer';

function SubComponent() {
  return (
      <p className={`subComponent`}>SubComponent</p>
  );
}

function Test() {

  return (

      <Container className={"text-justify"}>
        <h3>Development</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={"0"}>
            <Accordion.Header>Rampage Flights 1 & 3 odds (turbo)</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col md={6} lg={5}>
                  <SubComponent foo="bar" />
                </Col>
                <Col md={6} lg={7}>
                  <p className="my">Hello world!</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
  )
}

const testRenderer = TestRenderer.create(<Test />);
const testInstance = testRenderer.root;

// expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
// expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);

export default Test;