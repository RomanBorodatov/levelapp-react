import React, { Component } from "react";
import partners from "../../static/partners.png";
import messages from "../../locale/messages";

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
			email: "",
			success: false
    };
  }
  sendEmail = () => {
    if (this.state.error) {
      return;
    } else {
      const data = {
        email_address: this.state.email,
        status: "subscribed"
      };
      fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      }).then(response => {
        if (response.status === 200) this.setState({error: '', success: true});
        if (response.status === 400) this.setState({error: this.props.messages.error.exists});
      });
    }
  }

  submit = async e => {
    e.preventDefault();
    if (!validateEmail(this.state.email)) {
      await this.setState({ error: this.props.messages.error.wrongEmail });
		}
		if (this.state.error === '') {
			this.sendEmail();
		}
  };

  handleEmail = e => {
    this.setState({ email: e.target.value, error: "" });
  };
  render() {
    const { messages } = this.props;
    return (
      <footer className="footer">
        <div className="footer-main-block">
          <h2 className="footer-title">{messages.title}</h2>
          <p className="footer-subtitle">{messages.subtitle}</p>
          <form>
            <div className="input-holder">
              <input
                type="email"
                name="email"
                placeholder={messages.placeholder}
                className="footer-input"
                onChange={this.handleEmail}
                value={this.state.email}
                aria-required="true"
                aria-invalid="false"
              />
            </div>
            <button
              type="submit"
              onClick={this.submit}
              className={`button ${
                this.state.error ? "button__disabled" : null
              }`}
            >
              <span>{messages.subscribe}</span>
            </button>
            {this.state.error ? (
              <span className="error">{this.state.error}</span>
						) : null}
						{this.state.success ? (
              <span className="success">{messages.success}</span>
            ) : null}
          </form>
          <h3 className="footer-question">{messages.question}</h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@levelapp.cx"
            className="footer-mail-to"
          >
            <p>info@levelapp.cx</p>
          </a>
          <div className="container footer-agreement-container">
            <div className="row">
              <div className="one-third column footer-agreement">
                <a href="/agreement" target="_blank" rel="noopener noreferrer">
                  {" "}
                  {messages.agreement}
                </a>
              </div>
              <div className="one-third column footer-agreement">
                <a href="/policy" target="_blank" rel="noopener noreferrer">
                  {messages.policy}
                </a>
              </div>
              <div className="one-third column footer-agreement">
                <a href="/about" target="_blank" rel="noopener noreferrer">
                  {messages.about}
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <div className="footer-payment">
              <img src={partners} alt="partner" />
              <div>{messages.payment}</div>
            </div>
            <ul className="footer-socials">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bitcointalk.org/index.php?topic=4807459.msg43367864#msg43367864"
                >
                  <i className="fab fa-bitcoin" />
                </a>
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
                  href="https://twitter.com/levelapp_ico?lang=en"
                >
                  <i className="fab fa-twitter" />
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
          </div>
        </div>
        <div className="footer-copyright">
          This website is ran by LevelApp Exchange OÜ, registration code
          14551071, Estonia, Harju maakond, Tallinn, Lasnamäe linnaosa, Punane
          tn 56, 13619
        </div>
      </footer>
    );
  }
}

export default Footer;
