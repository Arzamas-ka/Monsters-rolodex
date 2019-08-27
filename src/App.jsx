import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box";
import "./App.css";

export default class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  handleField = evt => this.setState({ searchField: evt.target.value });

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handelChange={this.handleField}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}
