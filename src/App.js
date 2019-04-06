import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Char from './Char'

const instance = axios.create({
  baseURL: 'https://swapi.co/api',
  timeout: 1000
});

class App extends Component {
  state = {
    characters : []
  }

  async componentDidMount(){
    // const rawInfo = await instance.get("https://swapi.co/api/people/")
    const info = await instance.get("/people/")
    // const info = await rawInfo.json()
    this.setState({
      characters: info.data.results
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.characters.map((char, key) =>{
            return(
              <Char name = {char.name} key= {key} col={char.eye_color}/>
            )
          })}
        </header>
      </div>
    );
  }
}

export default App;
