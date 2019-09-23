import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import getDataFromServer from '../services/GetDataFromServer';
import List from './List';
import Detail from './Detail';
import '../stylesheets/App.scss';
import Loader from './Loader';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filterCharacters: [],
    }
    this.searchName = this.searchName.bind(this);
    this.renderList = this.renderList.bind(this)
    this.renderDetail = this.renderDetail.bind(this)

  }

  componentDidMount() {
    getDataFromServer()
      .then(getCharacters => this.setState({
        characters: getCharacters
      }));
  }

  searchName(ev) {
    const findName = ev.target.value.toLowerCase();
    const { characters } = this.state;
    const searchResults = characters.filter(character => {
      const characterName = character.name.toLowerCase();
      return characterName.includes(findName);
    });
    //console.log(searchResults)
    this.setState({
      filterCharacters: searchResults,
    });
  }

  renderList() {
    return <List characters={(this.state.filterCharacters.length !== 0) ? this.state.filterCharacters : this.state.characters} searching={(this.state.filterCharacters.length !== 0) ? "Resultados" : "No hay resultados"} />
  }

  renderDetail(props) {
    debugger;
    const selectedCharacter = parseInt(props.match.params.id);
    const { characters } = this.state;
    let foundCharacter;
    for (let character of characters) {
      if (character.id === selectedCharacter) {
        foundCharacter = character
      }
    }
    return (foundCharacter) ? <Detail character={foundCharacter} /> : <Loader />

  }

  render() {
    return (
      <div className="App">
        <Header />
        <form className="form__filter">
          <input type="text" className="form__name" placeholder="Buscar personaje" onChange={this.searchName}></input>
        </form>
        <section className="main">
          <Switch>
            <Route exact path="/" render={this.renderList} />
            <Route path="/character/:id" render={this.renderDetail} />
          </Switch>
        </section>
        < Footer />
      </div>
    );
  }
}

export default App;

// {(props) => 