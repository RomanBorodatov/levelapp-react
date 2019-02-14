import React, { Component } from 'react';

class Section6 extends Component {
  render() {
    return (
        <section className="section-9">
            <h3 className="section-title">Cryptocurrency Adoption</h3>
            <p className="section-subtitle">Percentage of adult users that have used apple pay at any point in time</p>
            <div className="container">
                <div className="row">
                    <div className="one-third column card wow zoomIn">
                        <span className="number">75%</span>
                        <span className="property">People heard about crypto</span>
                    </div>
                    <div className="one-third column card wow zoomIn">
                        <span className="number">5.8M</span>
                        <span className="property">People actually own some</span>
                    </div>
                    <div className="one-third column card wow zoomIn">
                        <span className="number">min16K</span>
                        <span className="property">Number of purchases for crypto dail</span>
                    </div>
                </div>
            </div>         
        </section>
    );
  }
}

export default Section6;
