import './App.css';
import React from 'react';
import CardList from './CardList';
import Searchbox from './seachbox';
import Scrollable from './Scrollable';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      Searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      response => response.json()).then(users => this.setState({
        robots: users
      }))
  }
  onsearch = (event) => {
    this.setState({
      Searchfield: event.target.value
    })
  }
  render() {
    const filtered = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
    })
    if (this.state.robots.length === 0) {
      return (
        <h1>LOADING</h1>
      )
    }
    else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <Searchbox onsearch={this.onsearch} />
          <Scrollable>
            <CardList robots={filtered} />
          </Scrollable>
        </div>
      );
    }
  }
}
export default App;