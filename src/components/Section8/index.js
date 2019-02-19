import React, { Component } from 'react';
import chart from '../../static/chart.png';

class Section6 extends Component {
  render() {
    const { messages } = this.props;
    return (
        <section className="section-8">
            <h3 className="section-title">{messages.title}</h3>
            <p className="section-subtitle">{messages.subtitle}</p>
            <img src={chart} alt="chart" className="chart" />      
        </section>
    );
  }
}

export default Section6;
