import React, { Component } from "react";
import logo from "../../static/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: false
    };
    this.state = {
      localizationBar: true
    };
  }

  toggleResponsive = () => {
    this.setState({
      responsive: !this.state.responsive
    });
  };

  scroll = event => {
    event.preventDefault();
    let hashval = event.target.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    window.history.pushState(null, null, hashval);
    this.toggleResponsive();
  };

  handleLocalization = e => {
    this.setState({
      localizationBar: !this.state.localizationBar
    });
  };

  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul
          className={`nav ${this.state.responsive ? "responsive" : ""}`}
          id="nav"
        >
          <li className="nav-item">
            <a href="#features" onClick={this.scroll}>
              Features and MVP
            </a>
          </li>
          <li className="nav-item">
            <a href="#research" onClick={this.scroll}>
              Market research
            </a>
          </li>
          <li className="nav-item">
            <a href="#docs-sect" onClick={this.scroll}>
              Documents
            </a>
          </li>
          <li className="nav-item">
            <a href="#team-sect" onClick={this.scroll}>
              Team
            </a>
          </li>
          <li className="nav-item">
            <a href="#roadmap-sect" onClick={this.scroll}>
              Roadmap
            </a>
          </li>
          <li onClick={this.handleLocalization}>
            <ul class="languagepicker">
              <a href="#eng">
                <li>
									<a href="/" >
                  Eng
									</a>
                </li>
              </a>
              <a href="#rus">
                <li>
									<a href="/ru">
                  Rus
									</a>
                </li>
              </a>
            </ul>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/levelapp_ico/">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/levelapp_ico">
              <i className="fab fa-telegram-plane" />
            </a>
          </li>
        </ul>
        <span className="icon" onClick={this.toggleResponsive}>
          <i className="fas fa-bars" />
        </span>
      </header>
    );
  }
}

export default Header;
