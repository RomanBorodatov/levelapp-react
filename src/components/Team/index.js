import React, { Component } from "react";
import team1 from '../../static/img/team1.png'
import team2 from '../../static/img/team2.jpg'
import team3 from '../../static/img/team3.jpg'
import team4 from '../../static/img/team4.png'
import team5 from '../../static/img/team5.jpg'
import team6 from '../../static/img/team6.png'
import team7 from '../../static/img/team7.jpg'
import team8 from '../../static/img/team8.png'
import team9 from '../../static/img/team9.png'
import Slider from 'react-slick';
import linkedin from '../../static/img/linkedin.png';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidthVal: null
    };
  }

  componentDidMount() {
    this.windowWidth();
    window.addEventListener("resize", this.windowWidth);
  }

  windowWidth = () => {
    this.setState({ windowWidthVal: window.innerWidth });
  };

  render() {

    const { messages } = this.props; 
    const settings = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 870,
          settings: {
            draggable: true,
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
    }
    return (
      <section id="team-sect" className="team section-holder">
        <div className="team__title-block">
          <h2 className="team__title" v-html="$t('pages.app.titles.5')" >{messages.title}</h2>
          {/* <a className="team__join" href="#" v-html="$t('pages.app.team__join')">
            JOIN THE TEAM
          </a> */}
        </div>
        {this.state.windowWidthVal > 870 ? (
          <ul v-if="windowWidthVal > 870" className="team__list">
            <li className="team__item">
              <a
                className="team__link"
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/bohdan-kuleba-984576169/"
              >
                <div className="team__logo">
                  <img src={team1} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team1.name}</span>
                  <span
                    className="team__position"
                  >{messages.team1.position}</span>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a
                className="team__link"
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/paulaverkiev?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BK5liQYxkRsG3xROG4DrhuQ%3D%3D"
              >
                <div className="team__logo">
                  <img src={team5} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team5.name}</span>
                  <span
                    className="team__position"
                  >{messages.team5.position}</span>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a
                className="team__link"
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/helenvino?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5kKQVbAYQg%2BNzbiT9d1aTQ%3D%3D"
              >
                <div className="team__logo">
                  <img src={team7} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team7.name}</span>
                  <span
                    className="team__position"
                  >{messages.team7.position}</span>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a
                className="team__link"
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/andrii-hedeon/"
              >
                <div className="team__logo">
                  <img src={team2} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team2.name}</span>
                  <span
                    className="team__position"
                  >{messages.team2.position}</span>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a
                className="team__link"
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nikolai-timofejev-19667715b/"
              >
                <div className="team__logo">
                  <img src={team3} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team3.name}</span>
                  <span
                    className="team__position"
                  >{messages.team3.position}</span>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a
                className="team__link"
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/alexanderkisel/"
              >
                <div className="team__logo">
                  <img src={team6} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team6.name}</span>
                  <span
                    className="team__position"
                  >{messages.team6.position}</span>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a
                className="team__link"
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dektox/"
              >
                <div className="team__logo">
                  <img src={team4} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team4.name}</span>
                  <span
                    className="team__position"
                  >{messages.team4.position}</span>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a
                className="team__link"
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/manakhov/"
              >
                <div className="team__logo">
                  <img src={team9} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team9.name}</span>
                  <span
                    className="team__position"
                  >{messages.team9.position}</span>
                </div>
              </a>
            </li>
          </ul>
        ) : <Slider {...settings} >
            <div className="team__item">
              <a
                className="team__link"
                onMouseDown={(e) => e.preventDefault()}
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/bohdan-kuleba-984576169/"
              >
                <div className="team__logo">
                  <img src={team1} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team1.name}</span>
                  <span
                    className="team__position"
                  >{messages.team1.position}</span>
                </div>
              </a>
            </div>
            <div className="team__item">
              <a
                className="team__link"
                onMouseDown={(e) => e.preventDefault()}
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/paulaverkiev?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BK5liQYxkRsG3xROG4DrhuQ%3D%3D"
              >
                <div className="team__logo">
                  <img src={team5} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team5.name}</span>
                  <span
                    className="team__position"
                  >{messages.team5.position}</span>
                </div>
              </a>
            </div>
            <div className="team__item">
              <a
                className="team__link"
                onMouseDown={(e) => e.preventDefault()}
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/helenvino?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5kKQVbAYQg%2BNzbiT9d1aTQ%3D%3D"
              >
                <div className="team__logo">
                  <img src={team7} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team7.name}</span>
                  <span
                    className="team__position"
                  >{messages.team7.position}</span>
                </div>
              </a>
            </div>
            <div className="team__item">
              <a
                className="team__link"
                onMouseDown={(e) => e.preventDefault()}
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/andrii-hedeon/"
              >
                <div className="team__logo">
                  <img src={team2} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team2.name}</span>
                  <span
                    className="team__position"
                  >{messages.team2.position}</span>
                </div>
              </a>
            </div>
            <div className="team__item">
              <a
                className="team__link"
                onMouseDown={(e) => e.preventDefault()}
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nikolai-timofejev-19667715b/"
              >
                <div className="team__logo">
                  <img src={team3} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team3.name}</span>
                  <span
                    className="team__position"
                  >{messages.team3.position}</span>
                </div>
              </a>
            </div>
            <div className="team__item">
              <a
                className="team__link"
                onMouseDown={(e) => e.preventDefault()}
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/alexanderkisel/"
              >
                <div className="team__logo">
                  <img src={team6} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team6.name}</span>
                  <span
                    className="team__position"
                  >{messages.team6.position}</span>
                </div>
              </a>
            </div>
            <div className="team__item">
              <a
                className="team__link"
                onMouseDown={(e) => e.preventDefault()}
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dektox/"
              >
                <div className="team__logo">
                  <img src={team4} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team4.name}</span>
                  <span
                    className="team__position"
                  >{messages.team4.position}</span>
                </div>
              </a>
            </div>
            <div className="team__item">
              <a
                className="team__link"
                onMouseDown={(e) => e.preventDefault()}
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/manakhov/"
              >
                <div className="team__logo">
                  <img src={team9} alt="team" />
                  <img
                    className="team__icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <div className="team__name-block">
                  <span
                    className="team__name"
                  >{messages.team9.name}</span>
                  <span
                    className="team__position"
                  >{messages.team9.position}</span>
                </div>
              </a>
            </div>
        </Slider>}
      </section>
    );
  }
}

export default Team;
