import React, { Component } from 'react';
import appstore from '../../static/svg/appstore_icon.svg';
import messages from '../../locale/messages';

class Section6 extends Component {
  render() {
    const { messages } = this.props;
    return (
        <section className="section-6">
          <div className="row">
            <div className="two-thirds column hero">
                <h5>{messages.title}</h5>
                <p>{messages.desc}</p>
                <a href="https://itunes.apple.com/ua/app/levelapp-crypto-wallet/id1444586019?l=ru&mt=8" className="button">
                  <span>{messages.button}</span>
                  <div className="appStore-icon">
                    <img src={appstore} alt="icon" />
                  </div>
                </a>
            </div>
          </div>
        </section>
    );
  }
}

export default Section6;
