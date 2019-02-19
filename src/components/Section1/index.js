import React, { Component } from "react";
import iphone from "../../static/iphone.png";
import appstore from "../../static/svg/appstore_icon.svg";


class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {}
    };
  }
  
  render() {
    const { messages } = this.props;
    return (
      <section className="section-1">
        <div className="row">
          <div className="two-thirds column hero">
            <h1>{messages.title}</h1>
            <a
              href="https://itunes.apple.com/ua/app/levelapp-crypto-wallet/id1444586019?l=ru&mt=8"
              className="button"
            >
              <span>{messages.button}</span>
              <div className="appStore-icon">
                <img src={appstore} alt="icon" />
              </div>
            </a>
          </div>
          <div className="one-third column">
            <img src={iphone} alt="phone" className="phone" />
          </div>
        </div>
      </section>
    );
  }
}

export default Section1;
