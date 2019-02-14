import React, { Component } from 'react';
import bitcoin from '../../static/bitcoin.png';
import ethereum from '../../static/ethereum.png';
import lvl from '../../static/lvl.png';
import bitpanda from '../../static/bitpanda.png';

import Glide from '@glidejs/glide';

class Section4 extends Component {
    componentDidMount() {
        new Glide('#glide-currency', {
            type: 'carousel',
            perView: 4,
            focusAt: '0',
            breakpoints: {
                1140: {
                    perView: 4
                },
                768: {
                    perView: 2
                }
            }
        }).mount();
    }

    render() {
        return (
            <section className="section-4">
                <h3 className="section-title">Buy crypto with payment card</h3>
                <p className="section-subtitle">Select a card for payment</p>

                <div className="glide currency-cards" id="glide-currency">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            <li className="glide__slide">
                                <div className="currency-card active">
                                    <span>BTC</span>
                                    <div className="bitcoin-logo">
                                        <img src={bitcoin} alt="logo" className="currency-logo bitcoin" />
                                    </div>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="currency-card">
                                    <span>ETH</span>
                                    <img src={ethereum} alt="logo" className="currency-logo" />
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="currency-card">
                                    <span>LVL</span>
                                    <img src={lvl} alt="logo" className="currency-logo" />
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="currency-card">
                                    <span>Bitpanda</span>
                                    <img src={bitpanda} alt="logo" className="currency-logo" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="help-info">Commission: $ 23,14</p>
                <p className="help-info">Price: 1 BTC $4 014.82 ~ ₴111 522.90</p>

                <div className="buying-container">
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
                    <div className="row">
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