import './Contact.css';
import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (<Container>
        <Container className={"text-left"}>
          <h3>Contact Us</h3>
          <Row>
            <Col>
              <p>Let's discuss the situation. We can gather around the campfire.</p>
            </Col>
          </Row>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Row className={"mb-3"}>
              <Form.Group as={Col} md={"6"} controlId={"formBasicName"}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className={"mt-3"}>
              <Form.Group as={Col} md="6" controlId={"formBasicEmail"}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type={"email"} />
              </Form.Group>
            </Row>
            <Row className={"mt-3"}>
              <Form.Group as={Col} md="6" controlId={"formBasicTelephone"}>
                <Form.Label>Telephone</Form.Label>
                <Form.Control
                    required
                    type={"telephone"} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className={"mt-3"}>
              <Form.Group as={Col} md="6">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
              </Form.Group>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={6}>
                <Button type="submit" variant={"primary"}>Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>);
}

export default Contact;