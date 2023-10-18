import './Development.css';
import Container from 'react-bootstrap/container';
import { Row, Col, Accordion } from 'react-bootstrap';
import workData from './work.json';

function Development() {
  let sizeXsLeft = 4;
  let sizeXsRight = 8;
  let sizeSmLeft = 4;
  let sizeSmRight = 8;
  let sizeMdLeft = 3;
  let sizeMdRight = 9;
  let sizeLgLeft = 2;
  let sizeLgRight = 10;

  console.dir(workData);

  return (
      <Container className={"text-justify"}>
        <h3>Development</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={"0"}>
            <Accordion.Header>Red Bull - RoxRite 100</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                  <a href="http://www.roxrite100.com" rel="noreferrer" target="_blank">
                    <img src="img/roxrite-t.gif" alt="Red Bull - RoxRite 100"
                         className="img-responsive thumbnail" /></a>
                </Col>
                <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
                  <p>A single-page app showcasing the career of breakdancing legend <b><i>RoxRite</i></b>.</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={"1"}>
            <Accordion.Header>
              Red Bull Organics
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                  <a href="https://www.redbull.com/int-en/theorganics" rel="noreferrer"
                     target="_blank">
                    <img src="img/redbullorganics.png" alt="Red Bull Cola!" className="img-responsive thumbnail" /></a>
                </Col>
                <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
                  <p>Site marketing Red Bull Organics.</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={"2"}>
            <Accordion.Header>
              Anthem/Blue Cross
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                  <img src="img/blue-cross.png" alt="Anthem/Blue Cross"
                       className="img-responsive thumbnail" />
                </Col>
                <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
                  <p>Deutsch wanted Anthem to improve the usability of their four public-facing web sites. After a third-party conducted a statistical usability study, we took the redesigned site and implemented all of the new design specs in a standards-compliant, cross-browser compatible web stack.</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={"3"}>
            <Accordion.Header>
              HTC Smartphone
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                  <img src="img/htc-rezound-96x96.jpg" alt="HTC ReZound"
                       className="img-responsive thumbnail" />
                </Col>
                <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
                  <p>Verizon introduced the HTC ReZound smartphone and wanted a mobile site to
                    show off the phone. We built a mobile site with a touchscreen interface. Like a 360 view of the phone that"s rotated by swiping the touch screen left or
                    right.
                  </p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={"4"}>
            <Accordion.Header>
              Bare Escentuals
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                  <img src="img/be-96x96.jpg" alt="Bare Escentuals"
                       className="img-responsive thumbnail" />
                </Col>
                <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
                  <p>Chiat\Day needed a Facebook page that would tie in with "Bare Escentuals Cosmetics" Be a Force of
                    Beauty&amp;trade; campaign. With seven video segments, it made sense to build a video channel. We
                    seized the opportunity to use the built-in video capabilities of newer web browsers.</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={"5"}>
            <Accordion.Header>
              GameTrailers.com
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                  <a href="https://www.gametrailers.com/netstorage/mobile" rel="noreferrer"
                     target="_blank">
                    <img src="img/gt-mobile-reviews-96x96.png" alt="GameTrailers.com"
                         className="img-responsive thumbnail" />
                  </a>
                </Col>
                <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
                  <p>MTV Networks' Entertainment division wanted to spruce up their mobile presence ahead of the 2011
                    Electronics Entertainment Expo. Solution: rapid deployment of a jQuery Mobile Framework version of
                    their site.</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={"6"}>
            <Accordion.Header>
              Snervous
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                  <img src="img/snervous.jpg" alt="Snervous" className="img-responsive thumbnail float-start" />
                </Col>
                <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
                  <p>Interactive brochure site for Tyler Oakley's eponymous feature film <i>Snervous</i>.</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={"7"}>
            <Accordion.Header>
              Betch
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                  <img src="img/betch.png" alt="Betch" className="img-responsive thumbnail" />
                </Col>
                <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
                  <p>Interactive brochure site for the Betch Sketch eponymous feature film.</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={"8"}>
            <Accordion.Header>
              Captain Morgan Rum
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                  <a href="http://www.spike.com/collection/bracketmaster" rel="noreferrer"
                     target="_blank">
                    <img src="img/captain-morgan-96x96.jpg" alt="Captain Morgan Rum" className="img-responsive thumbnail" /></a>
                </Col>
                <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
                  <p>In previous years, the Captain Morgan Bracket Master Challenge had been built with Adobe Flash. We
                    took that experience and recreated it in JavaScript, CSS, and HTML.</p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={"9"}>
            <Accordion.Header>
              Disney Family.com
            </Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col xs={sizeXsLeft} sm={sizeSmLeft} md={sizeMdLeft} lg={sizeLgLeft}>
                  <a href="http://family.disney.com/" rel="noreferrer" target="_blank">
                    <img src="img/disney-family-96x96.png" alt="Disney Family.com"
                         className="img-responsive thumbnail" />
                    </a>
                </Col>
                <Col xs={sizeXsRight} sm={sizeSmRight} md={sizeMdRight} lg={sizeLgRight}>
                  <p>Right around the time the iPad came out, people at Disney Family.com started to realize they were
                    going to have to do something about their Flash-driven content. We were able to reverse-engineer the
                    "feature carousel" that sits in the center well of the kaboose.com landing page. The seamless
                    transition was accomplished using the YUI library.
                  </p>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
  );
}

export default Development;