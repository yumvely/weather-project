import React, { Component } from 'react';
import Subject from "./components/Subject"
import Navi from "./components/Navi"
import Style from "./components/Style"
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi></Navi>
        <Style></Style>
      </div>
    );
  }
}

export default App;
