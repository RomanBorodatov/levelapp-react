import React, {Component} from 'react';

class RoadMap extends Component {
  render(){
    return (
      <section id="roadmap-sect" class="roadmap section-holder">
        <h2 class="roadmap__title" v-html="$t('pages.app.titles.6')"></h2>
        <ul class="roadmap__list">
          <li class="roadmap__item passed">
            <div class="roadmap__data">
              <span class="roadmap__date" v-html="$t('pages.roadmap.1.date')"></span>
              <strong class="roadmap__item-title" v-html="$t('pages.roadmap.1.title')"></strong>
              <span class="roadmap__subtitle" v-html="$t('pages.roadmap.1.subtitle')"></span>
              <p class="roadmap__text" v-html="$t('pages.roadmap.1.text')"></p>
            </div>
          </li>
          <li class="roadmap__item passed">
            <div class="roadmap__data">
              <span class="roadmap__date" v-html="$t('pages.roadmap.2.date')"></span>
              <strong class="roadmap__item-title" v-html="$t('pages.roadmap.2.title')"></strong>
              <p class="roadmap__text" v-html="$t('pages.roadmap.2.text')"></p>
            </div>
          </li>
          <li class="roadmap__item passed">
            <div class="roadmap__data">
              <span class="roadmap__date" v-html="$t('pages.roadmap.3.date')"></span>
              <strong class="roadmap__item-title" v-html="$t('pages.roadmap.3.title')"></strong>
              <p class="roadmap__text" v-html="$t('pages.roadmap.3.text')"></p>
            </div>
          </li>
          <li class="roadmap__item current">
            <div class="roadmap__data">
              <span class="roadmap__date" v-html="$t('pages.roadmap.4.date')"></span>
              <strong class="roadmap__item-title" v-html="$t('pages.roadmap.4.title')"></strong>
              <p class="roadmap__text" v-html="$t('pages.roadmap.4.text')"></p>
            </div>
          </li>
          <li class="roadmap__item">
            <div class="roadmap__data">
              <span class="roadmap__date" v-html="$t('pages.roadmap.5.date')"></span>
              <strong class="roadmap__item-title" v-html="$t('pages.roadmap.5.title')"></strong>
              <p class="roadmap__text" v-html="$t('pages.roadmap.5.text')"></p>
            </div>
          </li>
          <li class="roadmap__item">
            <div class="roadmap__data">
              <span class="roadmap__date" v-html="$t('pages.roadmap.6.date')"></span>
              <strong class="roadmap__item-title" v-html="$t('pages.roadmap.6.title')"></strong>
              <p class="roadmap__text" v-html="$t('pages.roadmap.6.text')"></p>
            </div>
          </li>
          <li class="roadmap__item">
            <div class="roadmap__data">
              <span class="roadmap__date" v-html="$t('pages.roadmap.7.date')"></span>
              <strong class="roadmap__item-title" v-html="$t('pages.roadmap.7.title')"></strong>
              <p class="roadmap__text" v-html="$t('pages.roadmap.7.text')"></p>
            </div>
          </li>
          <li class="roadmap__item">
            <div class="roadmap__data">
              <span class="roadmap__date" v-html="$t('pages.roadmap.8.date')"></span>
              <strong class="roadmap__item-title" v-html="$t('pages.roadmap.8.title')"></strong>
              <p class="roadmap__text" v-html="$t('pages.roadmap.8.text')"></p>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}

export default RoadMap;