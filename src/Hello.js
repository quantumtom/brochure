import './Hello.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Hello() {
  return (
      <Container>
        <Container className={"text-center"}>
          <Image src={"logo192.png"} alt={"Hydrogen Atom"} className="App-logo" rounded />
          <hr />
        </Container>
        <Container className={"text-left"}>
          <p>
            It's mostly just an effort to shape public opinion of our firm.
          </p>
          <p>
            Our aim here is to present a favorable perception of the company and its business. We hope to persuade you, such that you will have a positive emotional response whenever you think about Socktan Digital.
          </p>
          <p>
            Some say that we're <b>technically creative</b>.
          </p>
        </Container>
        <Container>
          <div className={"mb-6"}>&nbsp;</div>
        </Container>
      </Container>
  );
}

export default Hello;