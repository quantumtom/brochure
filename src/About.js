import './About.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function About() {
  return (
      <Container>
        <Container className={"text-center"}>
          <Image src={"logo192.png"} alt={"Hydrogen Atom"} className="App-logo" rounded />
          <hr />
        </Container>
        <Container className={"text-left"}>
          <p>
            Our aim here is to present a favorable perception of the company and its business. We hope to persuade you, such that you will have a positive emotional response whenever you think about Socktan Digital.
          </p>
          <p>
            It's mostlyn just a shameless effort to shape public perception.
          </p>
        </Container>
        <Container>
          <div className={"mb-6"}>&nbsp;</div>
        </Container>
      </Container>
  );
}

export default About;