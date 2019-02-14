import React, { Component } from 'react';
import partners from '../../static/partners.png';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="footer-main-block">
                <h2 className="footer-title">Get Updated</h2>
                <p className="footer-subtitle">Join the mailing list and get current news first</p>
                <form>
                    <div className="input-holder">
                        <input type="email" name="email" placeholder="Enter your email" className="footer-input" aria-required="true" aria-invalid="false" />
                    </div>
                    <button type="submit" className="button">
                        <span>Subscribe</span>
                    </button>
                </form> 
                <h3 className="footer-question">
                    Do you have questions? Get in touch
                </h3> 
                <a target="_blank" href="mailto:info@levelapp.cx" className="footer-mail-to"><p>info@levelapp.cx</p></a>
                <div className="container footer-agreement-container">
                    <div className="row">
                        <div className="one-third column footer-agreement">
                            <a href="/agreement" target="_blank">User agreement</a>
                        </div>
                        <div className="one-third column footer-agreement">
                            <a href="/policy" target="_blank">Privacy policy</a>
                        </div>
                        <div className="one-third column footer-agreement">
                            <a href="/about" target="_blank">About us</a>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="footer-payment">
                        <img src={partners} alt="partner" />
                        <div>
                            The payment for digital assets in the LevelApp application performed in accordance with the exchange rate indicated in the LevelApp application at the time of purchasing. Contacts: support@levelapp.cx +380688869873
                        </div>
                    </div>
                    <ul className="footer-socials">
                        <li><a target="_blank" href="https://bitcointalk.org/index.php?topic=4807459.msg43367864#msg43367864"><i className="fab fa-bitcoin"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/levelapp_ico/"><i className="fab fa-instagram"></i></a></li>
                        <li><a target="_blank" href="https://mobile.twitter.com/LevelApp_ICO"><i className="fab fa-twitter"></i></a></li>
                        <li><a target="_blank" href="https://t.me/levelapp_ico"><i className="fab fa-telegram-plane"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                This website is ran by LevelApp Exchange OÜ, registration code 14551071, Estonia, Harju maakond, Tallinn, Lasnamäe linnaosa, Punane tn 56, 13619
            </div>
        </footer>
    );
  }
}

export default Footer;
