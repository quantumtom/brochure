import './Development.css';
import Container from 'react-bootstrap/Container';
import { Row, Col, Accordion } from 'react-bootstrap';
import jobsData from './work.json';

function Development() {

  return (
      <Container className={"text-justify"}>
        <h5>Development</h5>

        <Accordion defaultActiveKey="0">
          {
            jobsData.map((job) =>
                <Accordion.Item eventKey={job.id} key={job.id}>
                  <Accordion.Header>{job.title}</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col xs={4} sm={4} md={3} lg={2}>
                        <a href={job.link} rel="noreferrer" target="_blank">
                          <img src={job.image.url} alt={job.title}
                               className="img-responsive thumbnail" /></a>
                      </Col>
                      <Col xs={8} sm={8} md={9} lg={10}>
                        <p>{job.caption}</p>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
            )
          }

        </Accordion>
      </Container>
  );
}

export default Development;