import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import getDataFromServer from '../services/GetDataFromServer';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filterCharacters: [],
    }
    this.searchName = this.searchName.bind(this)
  }

  componentDidMount () {
    getDataFromServer()
   .then( getCharacters => this.setState({
     characters: getCharacters
   }));
  }
  
  searchName (ev) {
    const findName = ev.target.value.toLowerCase();
    const { characters } = this.state;
   const searchResults = characters.filter (character => {
     const characterName = character.name.toLowerCase();
     return characterName.includes(findName);
   });
   console.log(searchResults)
   this.setState({
     filterCharacters : searchResults,
   });
  }

  render() {

    return (
      <div className="App">
        <Header />
        <form className="form__filter">
          <input type ="text" className="form__name" placeholder="Buscar personaje" onChange ={this.searchName}></input>
        </form>
        <section className="main">
        <List characters = {(this.state.filterCharacters.length !== 0) ? this.state.filterCharacters : this.state.characters} searching = {(this.state.filterCharacters.length !== 0) ? "Resultados" : "No hay resultados"} />
        </section>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
