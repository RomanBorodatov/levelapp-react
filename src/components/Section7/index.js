import React, { Component } from 'react';

class Section6 extends Component {
  render() {
    return (
        <section id="research" className="section-7">
            <p className="section-subtitle">Market research</p>
            <h3 className="section-title">Apple Pay Adoption</h3>
            <div className="container">
                <div className="row">
                    <div className="one-third column card wow zoomIn">
                        <span className="number">87M</span>
                        <span className="property">Number of users</span>
                    </div>
                    <div className="one-third column card wow zoomIn">
                        <span className="number">37M</span>
                        <span className="property">Number of NFC terminals</span>
                    </div>
                    <div className="one-third column card wow zoomIn">
                        <span className="number">3.5K</span>
                        <span className="property">Number of banks</span>
                    </div>
                </div>
            </div>        
        </section>
    );
  }
}

export default Section6;
