import React, { Component } from 'react';
import partner1 from '../../static/partners/logo_rainier.png';
import partner2 from '../../static/partners/1.png';
import partner3 from '../../static/partners/2.png';
import partner4 from '../../static/partners/3.png';
import partner5 from '../../static/partners/4.png';

import Slider from 'react-slick';

class Section3 extends Component {
    render() {
        const { messages } = this.props;
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true
                  }
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                  }
                }
            ]
        };
        return (
            <section className="section-3">
                <h3 className="section-title">{messages.title}</h3>
                    <Slider {...settings} className="partners">
                        <div>
                            <div className="partner-card">
                                <img src={partner1} alt="partner" className="partner-logo" />
                            </div>
                        </div>
                        <div>
                            <div className="partner-card">
                                <img src={partner2} alt="partner" className="partner-logo" />
                            </div>
                        </div>
                        <div>
                            <div className="partner-card">
                                <img src={partner3} alt="partner" className="partner-logo" />
                            </div>
                        </div>
                        <div>
                            <div className="partner-card">
                                <img src={partner4} alt="partner" className="partner-logo" />
                            </div>
                        </div>
                        <div>
                            <div className="partner-card">
                                <img src={partner5} alt="partner" className="partner-logo" />
                            </div>
                        </div>
                    </Slider>
            </section>
        );
    }
}

export default Section3;