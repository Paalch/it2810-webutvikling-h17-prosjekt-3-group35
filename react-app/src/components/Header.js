import React, { Component } from 'react';
import '../styles/header.css'

class Header extends Component {
  render () {
    return (
      <div className={'header-container'}>
        <h1>SaveMyLife.com</h1>
      </div>
    );
  }
}

export default Header;