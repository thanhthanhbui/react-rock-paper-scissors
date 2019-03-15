import React from 'react';
import { Container, Header, Button, } from 'semantic-ui-react';
import RockPaperScissors from './RockPaperScissors';

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { value: 0 }
  // }

  render() {
    return (
      <Container style={{ marginTop: "25px" }}>
        <Header as="h1" style={{ textAlign: "center" }}>React Rock Paper Scissors</Header>
        <br />
        <RockPaperScissors />
      </Container>
    );
  }
}

export default App;
