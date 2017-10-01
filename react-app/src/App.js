import React, { Component } from 'react';
import Header from './components/Header';
import Main from "./containers/Main";
import BottomNav from './components/BottomNav';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <BottomNav/>
      </div>
    );
  }
}

export default App;
