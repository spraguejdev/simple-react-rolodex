import React, { Component }  from 'react';
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await resp.json();
      this.setState({monsters: users });
    } catch (err) {
      console.log("Error fetching users: ", err);
    }

  }
  render () {
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
    <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters'
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters} />
    </div>
    )
  }
}

export default App;
