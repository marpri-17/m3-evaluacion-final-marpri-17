import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import getDataFromServer from '../services/GetDataFromServer';
import List from './List';
import Detail from './Detail';
import '../stylesheets/App.scss';
import Loader from './Loader';
import Footer from './Footer';
import Form from './Form';

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
    this.isSearching = this.isSearching.bind(this);
    this.renderIconDetail = this.renderIconDetail.bind(this);



  }

  componentDidMount() {
    getDataFromServer()
      .then(getCharacters => this.setState({
        characters: getCharacters
      }));
  }

  searchName(ev) {
    ev.preventDefault();
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

  isSearching() {
    const { filterCharacters, characters } = this.state;
    const charactersToRender = (this.state.filterCharacters.length !== 0) ? filterCharacters : characters;
    return charactersToRender
  }

  renderList() {
    return (
      <section className="main">
        <Form searchName={this.searchName} searching={(this.state.filterCharacters.length !== 0) ? "Resultados" : "Ningún personaje coincide con la búsqueda"} />
        <List characters={this.isSearching()} />
      </section>

    )
  }

  renderIconDetail(state) {
    console.log(state);
    const classToIconAlive = "fas fa-hand-spock";
    const classToIconDead = "fas fa-dizzy";
    const classToIconUnknown = "fas fa-question"
    if (state === "Alive") {
      return classToIconAlive
    } else if (state === "Dead") {
      return classToIconDead
    } else {
      return classToIconUnknown;
    }
  }


  renderDetail(props) {
    debugger;
    const selectedCharacter = parseInt(props.match.params.id);
    const { characters } = this.state;
    let foundCharacter;
    let iconToRender;
    for (let character of characters) {
      if (character.id === selectedCharacter) {
        foundCharacter = character
        iconToRender = this.renderIconDetail(character.status);
      }
    }
    return (foundCharacter) ? <Detail character={foundCharacter} iconToRender={iconToRender} /> : <Loader />

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={this.renderList} />
          <Route path="/character/:id" render={this.renderDetail} />
        </Switch>
        < Footer />
      </div>
    );
  }
}

export default App;

// {(props) => 