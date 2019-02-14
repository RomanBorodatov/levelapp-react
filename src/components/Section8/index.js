import React, { Component } from 'react';
import chart from '../../static/chart.png';

class Section6 extends Component {
  render() {
    return (
        <section className="section-8">
            <h3 className="section-title">Apple Pay Adoption</h3>
            <p className="section-subtitle">Percentage of adult users that have used apple pay at any point in time</p>
            <img src={chart} alt="chart" className="chart" />      
        </section>
    );
  }
}

export default Section6;
