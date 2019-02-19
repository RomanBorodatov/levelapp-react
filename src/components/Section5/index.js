import React, { Component } from "react";
import feature1 from "../../static/features/1.png";
import feature2 from "../../static/features/2.png";
import feature3 from "../../static/features/3.png";
import feature4 from "../../static/features/4.png";

import WOW from "wowjs";

class Section5 extends Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      const wow = new WOW.WOW({
        live: false
      });
      wow.init();
    }
  }
  render() {
    const { messages } = this.props;
    return (
      <section id="features" className="section-5">
        <h3 className="section-title">{messages.title}</h3>
        <div className="features wow slideInRight">
          <div className="feature-card">
            <img src={feature1} alt="" className="feature-image" />
            <div className="feature-description">
              <h6>{messages.feature1.title}</h6>
              <span>{messages.feature1.desc}</span>
            </div>
          </div>
          <div className="feature-card">
            <img src={feature2} alt="" className="feature-image" />
            <div className="feature-description">
              <h6>{messages.feature2.title}</h6>
              <span>{messages.feature2.desc}</span>
            </div>
          </div>
          <div className="feature-card">
            <img src={feature3} alt="" className="feature-image" />
            <div className="feature-description">
              <h6>{messages.feature3.title}</h6>
              <span>{messages.feature3.desc}</span>
            </div>
          </div>
          <div className="feature-card">
            <img src={feature4} alt="" className="feature-image" />
            <div className="feature-description">
              <h6>{messages.feature4.title}</h6>
              <span>{messages.feature4.desc}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section5;
