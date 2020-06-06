import React, { Component }  from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: []
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
    return (
    <div className="App">
      <header className="App-header">
        <p>
          {this.state.monsters.map((monster, i) => {
            return <h1 key={i}> {monster.name}</h1>
          })}
        </p>
          <button onClick={() => this.setState({string: "now"})}></button>
      </header>
    </div>
    )
  }
}

export default App;
