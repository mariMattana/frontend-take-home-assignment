import React, { Component } from 'react';
import Logo from '../../icons/logo.svg';

// styles
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="header-logo" src={Logo} />
      </div>
    );
  }
}

export default Header;
