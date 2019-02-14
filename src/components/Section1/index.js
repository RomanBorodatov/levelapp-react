import React, { Component } from 'react';
import iphone from '../../static/iphone.png';

class Section1 extends Component {
  render() {
    return (
        <section className="section-1">
            <div className="row">
                <div className="two-thirds column hero">
                    <h1>Securely buy Bitcoin and Ethereum with Apple Pay</h1>
                    <div className="button">
                        <span>Get LevelApp</span>
                    </div>
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