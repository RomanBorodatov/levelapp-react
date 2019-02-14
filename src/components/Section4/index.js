import React, { Component } from 'react';
import bitcoin from '../../static/bitcoin.png';
import ethereum from '../../static/ethereum.png';
import lvl from '../../static/lvl.png';
import bitpanda from '../../static/bitpanda.png';

import Slider from 'react-slick';

class Section4 extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                  }
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };
        return (
            <section className="section-4">
                <h3 className="section-title">Buy crypto with payment card</h3>
                <p className="section-subtitle">Select a card for payment</p>
                <div className="currency-cards-container">
                    <div className="currency-cards">
                        <Slider {...settings}>
                            <div>
                                <div className="currency-card active">
                                    <span>BTC</span>
                                    <div className="bitcoin-logo">
                                        <img src={bitcoin} alt="logo" className="currency-logo bitcoin" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href="https://itunes.apple.com/ua/app/levelapp-crypto-wallet/id1444586019?l=ru&mt=8" className="currency-card">
                                    <span>ETH</span>
                                    <img src={ethereum} alt="logo" className="currency-logo" />
                                </a>
                            </div>
                            <div>
                                <a href="https://itunes.apple.com/ua/app/levelapp-crypto-wallet/id1444586019?l=ru&mt=8" className="currency-card">
                                    <span>LVL</span>
                                    <img src={lvl} alt="logo" className="currency-logo" />
                                </a>
                            </div>
                            <div>
                                <a href="https://itunes.apple.com/ua/app/levelapp-crypto-wallet/id1444586019?l=ru&mt=8" className="currency-card">
                                    <span>Bitpanda</span>
                                    <img src={bitpanda} alt="logo" className="currency-logo" />
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
                <p className="help-info">Commission: $ 23,14</p>
                <p className="help-info">Price: 1 BTC $4 014.82 ~ ₴111 522.90</p>

                <div className="buying-container">
                    <div className="row">
                        <div className="one-half column">
                            <div className="form-container">
                                <div className="checkbox-container">
                                    <input type="checkbox" id="question" name="question" />
                                    <label htmlFor="question">If you have an application</label>
                                </div>
                                <div className="inputs-container">
                                    <input placeholder="Enter BTC address" className="full-input" />
                                    <input placeholder="Amount BTC" className="half-input" />
                                    <input placeholder="0 UAH" className="half-input" />
                                    <input placeholder="Enter your email" className="full-input" />
                                </div>
                                <div className="button">
                                    <span>Buy</span>
                                </div>
                            </div>
                        </div>
                    
                        <div className="one-half column buying-text">
                            <p>
                                You can buy bitcoins (BTC) at the price indicated in the widget on the left. 
                                The price includes the commission of the payment system, as well as a fee to miners for processing the transaction. 
                                There are no additional fees from our side, however, your bank may charge you additional fees (for example, when using loan funds).
                            </p>
                            <p>
                                The minimum purchase amount is 0.005 BTC, the maximum - 0.1 BTC Purchasing request is processing from 2 hours to 2 days. 
                                You can contact support at support@levelapp.cx or Telegram @levelapponline
                            </p>
                            <h4>Need a better exchange rate or Apple Pay?</h4>
                            <a href="#">Install LevelApp</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section4;