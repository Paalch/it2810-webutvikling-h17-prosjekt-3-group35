import React, {Component} from 'react';
import Header from './containers/header/Header';
import Main from "./containers/main/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
