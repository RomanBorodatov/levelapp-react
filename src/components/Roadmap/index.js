import React, {Component} from 'react';

class RoadMap extends Component {
  render(){
    const { messages } = this.props;
    return (
      <section id="roadmap-sect" class="roadmap section-holder">
        <h2 class="roadmap__title">{messages.title}</h2>
        <ul class="roadmap__list">
          <li class="roadmap__item passed">
            <div class="roadmap__data">
              <span class="roadmap__date" v-html="$t('pages.roadmap.1.date')">{messages['1'].date}</span>
              <strong class="roadmap__item-title" v-html="$t('pages.roadmap.1.title')">{messages['1'].title}</strong>
              <span class="roadmap__subtitle" v-html="$t('pages.roadmap.1.subtitle')">{messages['1'].subtitle}</span>
              <p class="roadmap__text" dangerouslySetInnerHTML={{__html: messages['1'].text}}></p>
            </div>
          </li>
          <li class="roadmap__item passed">
            <div class="roadmap__data">
              <span class="roadmap__date">{messages['2'].date}</span>
              <strong class="roadmap__item-title">{messages['2'].title}</strong>
              <p class="roadmap__text" dangerouslySetInnerHTML={{__html: messages['2'].text}}></p>
            </div>
          </li>
          <li class="roadmap__item passed">
            <div class="roadmap__data">
              <span class="roadmap__date" >{messages['3'].date}</span>
              <strong class="roadmap__item-title" >{messages['3'].title}</strong>
              <p class="roadmap__text" dangerouslySetInnerHTML={{__html: messages['3'].text}}></p>
            </div>
          </li>
          <li class="roadmap__item current">
            <div class="roadmap__data">
              <span class="roadmap__date" >{messages['4'].date}</span>
              <strong class="roadmap__item-title" >{messages['4'].title}</strong>
              <p class="roadmap__text" dangerouslySetInnerHTML={{__html: messages['4'].text}}></p>
            </div>
          </li>
          <li class="roadmap__item">
            <div class="roadmap__data">
              <span class="roadmap__date" >{messages['5'].date}</span>
              <strong class="roadmap__item-title" >{messages['5'].title}</strong>
              <p class="roadmap__text" dangerouslySetInnerHTML={{__html: messages['5'].text}}></p>
            </div>
          </li>
          <li class="roadmap__item">
            <div class="roadmap__data">
              <span class="roadmap__date" >{messages['6'].date}</span>
              <strong class="roadmap__item-title" >{messages['6'].title}</strong>
              <p class="roadmap__text" dangerouslySetInnerHTML={{__html: messages['6'].text}}></p>
            </div>
          </li>
          <li class="roadmap__item">
            <div class="roadmap__data">
              <span class="roadmap__date" >{messages['7'].date}</span>
              <strong class="roadmap__item-title" >{messages['7'].title}</strong>
              <p class="roadmap__text" dangerouslySetInnerHTML={{__html: messages['7'].text}}></p>
            </div>
          </li>
          <li class="roadmap__item">
            <div class="roadmap__data">
              <span class="roadmap__date" >{messages['8'].date}</span>
              <strong class="roadmap__item-title" >{messages['8'].title}</strong>
              <p class="roadmap__text" dangerouslySetInnerHTML={{__html: messages['8'].text}}></p>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}

export default RoadMap;