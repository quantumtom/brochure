import './Development.css';
import Container from 'react-bootstrap/container';
import { Row, Col, Accordion } from 'react-bootstrap';
import jobsData from './work.json';

function Development(props) {
  let sizeXsLeft = 4;
  let sizeXsRight = 8;
  let sizeSmLeft = 4;
  let sizeSmRight = 8;
  let sizeMdLeft = 3;
  let sizeMdRight = 9;
  let sizeLgLeft = 2;
  let sizeLgRight = 10;


  return (
      <Container className={"text-justify"}>
        <h3>Development</h3>

        <Accordion defaultActiveKey="0">

          {
            jobsData.map((job) =>
                <Accordion.Item eventKey={job.id} key={job.id}>
                  <Accordion.Header>{job.title}</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                        <a href={job.link} rel="noreferrer" target="_blank">
                          <img src={job.image.url} alt={job.title}
                               className="img-responsive thumbnail" /></a>
                      </Col>
                      <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
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