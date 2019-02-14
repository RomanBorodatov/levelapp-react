import React, { Component } from 'react';
import partner1 from '../../static/partners/logo_rainier.png';
import partner2 from '../../static/partners/1.png';
import partner3 from '../../static/partners/2.png';
import partner4 from '../../static/partners/3.png';
import partner5 from '../../static/partners/4.png';

import Glide from '@glidejs/glide';

class Section3 extends Component {
    
    componentDidMount() {
        new Glide('#glide-partners', {
            type: 'carousel',
            perView: 5,
            focusAt: 'center',
            breakpoints: {
                1140: {
                    perView: 4
                },
                960: {
                    perView: 3
                },
                768: {
                    perView: 2
                },
                576: {
                    perView: 1
                }
            }
        }).mount();
    }

    render() {
        return (
            <section className="section-3">
                <h3 className="section-title">Our partners</h3>
                <div className="glide partners" id="glide-partners">
                    <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <div className="partner-card">
                                <img src={partner1} alt="partner" className="partner-logo" />
                            </div>
                        </li>
                        <li className="glide__slide">
                            <div className="partner-card">
                                <img src={partner2} alt="partner" className="partner-logo" />
                            </div>
                        </li>
                        <li className="glide__slide">
                            <div className="partner-card">
                                <img src={partner3} alt="partner" className="partner-logo" />
                            </div>
                        </li>
                        <li className="glide__slide">
                            <div className="partner-card">
                                <img src={partner4} alt="partner" className="partner-logo" />
                            </div>
                        </li>
                        <li className="glide__slide">
                            <div className="partner-card">
                                <img src={partner5} alt="partner" className="partner-logo" />
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section3;