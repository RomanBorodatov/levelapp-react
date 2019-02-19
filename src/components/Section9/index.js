import React, { Component } from 'react';

class Section6 extends Component {
  render() {
      const {messages} = this.props;
    return (
        <section className="section-9">
            <h3 className="section-title">{messages.title}</h3>
            <p className="section-subtitle">{messages.subtitle}</p>
            <div className="container">
                <div className="row">
                    <div className="one-third column card wow zoomIn">
                        <span className="number">75%</span>
                        <span className="property">{messages.first}</span>
                    </div>
                    <div className="one-third column card wow zoomIn">
                        <span className="number">5.8M</span>
                        <span className="property">{messages.second}</span>
                    </div>
                    <div className="one-third column card wow zoomIn">
                        <span className="number">min16K</span>
                        <span className="property">{messages.third}</span>
                    </div>
                </div>
            </div>         
        </section>
    );
  }
}

export default Section6;
