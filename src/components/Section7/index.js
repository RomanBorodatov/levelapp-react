import React, { Component } from 'react';
import messages from '../../locale/messages';

class Section6 extends Component {
  render() {
      const { messages } = this.props;
    return (
        <section id="research" className="section-7">
            <p className="section-subtitle">{messages.subtitle}</p>
            <h3 className="section-title">{messages.title} </h3>
            <div className="container">
                <div className="row">
                    <div className="one-third column card wow zoomIn">
                        <span className="number">87M</span>
                        <span className="property">{messages.users}</span>
                    </div>
                    <div className="one-third column card wow zoomIn">
                        <span className="number">37M</span>
                        <span className="property">{messages.nfc}</span>
                    </div>
                    <div className="one-third column card wow zoomIn">
                        <span className="number">3.5K</span>
                        <span className="property">{messages.banks}</span>
                    </div>
                </div>
            </div>        
        </section>
    );
  }
}

export default Section6;
