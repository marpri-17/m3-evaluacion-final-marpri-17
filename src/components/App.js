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
      name: "",
      origin: "",
      gender: ""
    }
    this.searchName = this.searchName.bind(this);
    this.renderList = this.renderList.bind(this)
    this.renderDetail = this.renderDetail.bind(this)
    this.filterResults = this.filterResults.bind(this);
    this.renderIconDetail = this.renderIconDetail.bind(this);
    this.handleSelect = this.handleSelect.bind(this);


  }


  componentDidMount() {
    debugger;
    getDataFromServer()
      .then(getCharacters => this.setState({
        characters: getCharacters
      }));
    //const savedData = JSON.parse(localStorage.getItem('filter_cache'));
    // this.setState({

    // })
  }

  searchName(ev) {
    ev.preventDefault();
    const findName = ev.target.value;
    this.setState({
      name: findName,
    })
  }

  filterResults() {
    const { name, characters, origin } = this.state;
    // const dataForSave = {
    //   name: name,
    //   origin: origin,
    // }
    // localStorage.setItem('filter_cache', JSON.stringify(dataForSave));
    const searchResults = characters
      .filter(character => name === "" ? true : character.name.toLowerCase().includes(name.toLowerCase()))
      .filter(character => origin === "" ? true : character.origin === origin);
    //.filter(character => gender) === "" ? true : character.gender === gender

    return searchResults;

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
        <Form searchName={this.searchName} searching={(this.state.name.length !== 0) ? "Resultados" : "Ningún personaje coincide con la búsqueda"} origins={this.filterByOrigin()} handleSelect={this.handleSelect} />
        <List characters={this.filterResults()} />
      </section>

    )
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

  renderIconDetail(state) {
    const classToIconAlive = "fas fa-hand-spock";
    const classToIconDead = "fas fa-dizzy";
    const classToIconUnknown = "fas fa-question";
    if (state === "Alive") {
      return classToIconAlive
    } else if (state === "Dead") {
      return classToIconDead
    } else {
      return classToIconUnknown;
    }
  }

  filterByOrigin() {
    const { characters } = this.state;
    const originChoices = [];
    if (characters) {
      characters.map((character) => {
        if (!originChoices.includes(character.origin)) {
          originChoices.push(character.origin);
        }
      });
    }
    return originChoices;
  }
  // Checkbox for gender
  readGender() {
    const { characters, gender } = this.state;
    const genders = [];
    let genderConstructor = characters.map((character) => {
      if (genders.includes(character.gender)) {
      } else {
        return genders.push(character.gender)
      }
    })
    return genders
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
