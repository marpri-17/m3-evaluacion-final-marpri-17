import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import getDataFromServer from '../services/GetDataFromServer';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount () {
    getDataFromServer()
   .then( getCharacters => this.setState({
     characters: getCharacters
   }, console.log(this.state)));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
        <List characters = {this.state.characters} />
        </section>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
