import React, { Component } from 'react';
import feature1 from '../../static/features/1.png';
import feature2 from '../../static/features/2.png';
import feature3 from '../../static/features/3.png';
import feature4 from '../../static/features/4.png';

class Section5 extends Component {
  render() {
    return (
        <section id="features" className="section-5">
            <h3 className="section-title">Features & MVP</h3>
            <div className="features">
                <div className="feature-card">
                    <img src={feature1} alt="" className="feature-image" />
                    <div className="feature-description">
                        <h6>Simple Transactions</h6>
                        <span>Easily buy and store cryptocurrency</span>
                    </div>
                </div>
                <div className="feature-card">
                    <img src={feature2} alt="" className="feature-image" />
                    <div className="feature-description">
                        <h6>Convenient invoices</h6>
                        <span>Recieve payments in crypto from different people</span>
                    </div>
                </div>
                <div className="feature-card">
                    <img src={feature3} alt="" className="feature-image" />
                        <div className="feature-description">
                        <h6>Multi-currency wallet</h6>
                        <span>Store your assets without fear of losing the private key</span>
                    </div>
                </div>
                <div className="feature-card">
                    <img src={feature4} alt="" className="feature-image" />
                    <div className="feature-description">
                        <h6>Commissionless</h6>
                        <span>Operations with LVL token without commissions</span>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Section5;
