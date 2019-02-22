import React, { Component } from "react";
import logo from "../../static/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: false,
      localizationBar: true,
      language: ''
    };
  }

  toggleResponsive = () => {
    this.setState({
      responsive: !this.state.responsive
    });
  };

  async componentWillMount() {
    console.log(this.props.location)
    if (/\/ru/g.test(this.props.location)) {
      await this.setState({ language: 'Рус' });
    } else {
      await this.setState({ language: 'Eng' });
    }

  }

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
    const { messages } = this.props;
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
              {messages.features}
            </a>
          </li>
          <li className="nav-item">
            <a href="#research" onClick={this.scroll}>
              {messages.research}
            </a>
          </li>
          <li className="nav-item">
            <a href="#team-sect" onClick={this.scroll}>
              {messages.team}
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="#roadmap-sect" onClick={this.scroll}>
              {messages.roadmap}
            </a>
          </li> */}
          <li className="nav-item">
            <a href="#docs-sect" onClick={this.scroll} />
          </li>
          <li onClick={this.handleLocalization}>
            <div className="sl-nav">
              <ul>
                <li>
                  <b>{this.state.language}</b>{" "}
                  <i className="fa fa-angle-down" aria-hidden="true" />
                  <div className="triangle" />
                  <ul>
                    <li>
                      <i className="sl-flag">
                        <div id="eng" />
                      </i>{" "}
                      <a href='/' className="language active">{messages.eng}</a>
                    </li>
                    <li>
                      <i className="sl-flag">
                        <div id="ru" />
                      </i>{" "}
                      <a href="/ru" className="language">{messages.rus}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/l_e_v_e_l_app/"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/levelappann"
            >
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
