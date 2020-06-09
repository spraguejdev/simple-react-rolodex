import React, { Component }  from 'react';
import { CardList } from "./components/card-list/card-list";
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
        <input type="search" placeholder="Search Monsters" onChange={e => this.setState({searchField: e.target.value})}></input>
        <CardList monsters={filteredMonsters} />
    </div>
    )
  }
}

export default App;
