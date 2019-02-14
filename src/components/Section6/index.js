import React, { Component } from 'react';
import appstore from '../../static/svg/appstore_icon.svg';

class Section6 extends Component {
  render() {
    return (
        <section className="section-6">
          <div className="row">
            <div className="two-thirds column hero">
                <h5>Now you can enjoy the basic functionality of Level App!</h5>
                <p>More features are to be announced soon</p>
                <a href="https://itunes.apple.com/ua/app/levelapp-crypto-wallet/id1444586019?l=ru&mt=8" className="button">
                  <span>Get LevelApp</span>
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
