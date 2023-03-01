import { Component } from 'react';
import logo from '../images/logo-sistema-solar.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Sistema Solar</h1>
        <img src={ logo } alt="Logo do Sistema Solar" />
      </header>
    );
  }
}

export default Header;
