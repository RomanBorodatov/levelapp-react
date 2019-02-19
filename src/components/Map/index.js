import React, { Component } from "react";
import map from '../../static/img/map.svg';
import pay from '../../static/img/pay.png';



class Map extends Component {
  render() {
    const { messages } = this.props;
    return (
      <section className="map section-holder">
        <h2 className="map__title" v-html="$t('pages.app.titles.3')" >
        {messages.title}
          {/* <img
            className="map__title-logo"
            src={pay}
            alt="pay logo"
          /> */}
        </h2>
        <p className="map__desc" v-html="$t('pages.app.map__desc')" >
        {messages.desc}</p>
        <img src={map} alt="map" />
      </section>
    );
  }
}

export default Map;
