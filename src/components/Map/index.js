import React, { Component } from "react";
import map from '../../static/img/map.svg';
import pay from '../../static/img/pay.png';



class Map extends Component {
  render() {
    return (
      <section className="map section-holder">
        <h2 className="map__title" v-html="$t('pages.app.titles.3')" >
        Countries
          {/* <img
            className="map__title-logo"
            src={pay}
            alt="pay logo"
          /> */}
        </h2>
        <p className="map__desc" v-html="$t('pages.app.map__desc')" >
        There are more than 30 countries that support Apple Pay. New ones to be announced soon.</p>
        <img src={map} alt="map" />
      </section>
    );
  }
}

export default Map;
