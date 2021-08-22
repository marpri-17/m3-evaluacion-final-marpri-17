import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import { getCharactersData, getPictureInfo, test } from '../services/GetDataFromServer';
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
    this.handleSelect = this.handleSelect.bind(this);


  }

  componentDidMount() {
    // getDataFromServer()
    getCharactersData()
      .then(charactersList => {
        console.log(charactersList)
        this.setState({
          characters: charactersList.chars
        })
      })
    
    /* getCharactersData()
    .then(characters => getPictureInfo(characters))
      .then(getCharacters => this.setState({
        characters: getCharacters
      })); */
  }

  searchName(ev) {
    ev.preventDefault();
    const findName = ev.target.value.toLowerCase();
    const { characters } = this.state;
    const searchResults = characters.filter(character => {
      const characterName = character.name.toLowerCase();
      return characterName.includes(findName);
    });
    this.setState({
      filterCharacters: searchResults,
    });
  }

  isSearching() {
    const { filterCharacters, characters } = this.state;
    const charactersToRender = (this.state.filterCharacters.length !== 0) ? filterCharacters : characters;

    return charactersToRender;
  }

  handleSelect(ev) {
    const planetSelected = ev.target.value;
    this.setState({
      origin: planetSelected,
    });
    console.log(planetSelected); // Lifting del select
  }

  renderList() {
    return (
      <section className="main">
        <Form searchName={this.searchName} searching={(this.state.filterCharacters.length !== 0) ? "Resultados" : "Ningún personaje coincide con la búsqueda"} origins={this.filterByOrigin()} handleSelect={this.handleSelect} />
        <List characters={this.isSearching()} select={this.handleSelect} />
      </section>

    )
  }

  renderIconDetail(state) {
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

  filterByOrigin() {
    const { characters } = this.state;
    const originChoices = [];
    if (characters) {
      characters.forEach((character) => {
        if (originChoices.includes(character.origin)) {
        } else {
          originChoices.push(character.origin);
        }
      });
    }
    return originChoices;
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
