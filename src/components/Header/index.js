import React, { Component } from 'react';
import logo from '../../static/logo.png';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="nav" id="nav">
                <li className="nav-item"><a href="#features">Features and MVP</a></li>
                <li className="nav-item"><a href="#research">Market research</a></li>
                <li><a target="_blank" href="https://www.instagram.com/levelapp_ico/"><i className="fab fa-instagram"></i></a></li>
                <li><a target="_blank" href="https://t.me/levelapp_ico"><i className="fab fa-telegram-plane"></i></a></li>
            </ul>
            <span className="icon">
                <i className="fas fa-bars"></i>
            </span>
        </header>
    );
  }
}

export default Header;
