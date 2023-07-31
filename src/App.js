import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Map from './components/Map';
import Nav from './components/Nav';
import Temp from './components/Temp';
import Fortune from './components/Fortune';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header></Header>
        <div id = 'container'>
          <Searchbar></Searchbar>
          <div id="content-box">
            <div id="main">
              <Map></Map>
              <Nav></Nav>
            </div>
            <div id="aside">
              <Temp></Temp>
              <Fortune></Fortune>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;