import React from 'react';
import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';
import { Container, Button, Image, Segment, } from 'semantic-ui-react';

class RockPaperScissors extends React.Component {

  constructor(props) {
    super(props)
    this.state = { image: this.props.src }
  }

  computerImage = () => {
    this.setState({
      imageComputer: this.state.images[Math.floor(Math.random() * this.state.images.length)]
    })
  }

  getImage = (e) => {
    this.setState({ image: e.target.src})
  }

  render() {
    return (
      <Container>
        <Segment style={{ display: "flex", justifyContent: "space-around" }}>
          <Button onClick={this.getImage}>
            <Image src={rock} size='small' />
          </Button>
          <Button onClick={this.getImage}>
            <Image src={paper} size='small' />
          </Button>
          <Button onClick={this.getImage}>
            <Image src={scissors} size='small' />
          </Button>
        </Segment>
        <p>You choose:</p>
        <Image src={this.state.image} size='small' />
        <br />
        <p>Computer chooses:</p>
        {/* <Image src={this.state.imageComputer} size='small' /> */}
      </Container>
    )
  }
}

export default RockPaperScissors;