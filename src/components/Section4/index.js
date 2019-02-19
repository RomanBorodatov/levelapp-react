import React, { Component } from "react";
import bitcoin from "../../static/bitcoin.png";
import ethereum from "../../static/ethereum.png";
import lvl from "../../static/lvl.png";
import bitpanda from "../../static/bitpanda.png";
import crypto from "crypto";

import Slider from 'react-slick';
// import Glide from "@glidejs/glide";

class Section4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceBTC: "",
      priceUSD: "",
      wallet: "",
      uah: "",
      btc: "",
      email: "",
      registeredApp: false,
      data: "",
      signature: ""
    };
    this.form = React.createRef();
  }
  async componentDidMount() {
    
    this.load();
    setInterval(() => {
      this.load();
    }, 30000);
  }

  load = async () => {
    await fetch(
      "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11",
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          priceUSD: responseJSON[0].sale,
          priceBTC: (responseJSON[3].sale / 105) * 110
        });
      });
  };

  updateWallet = async e => {
    await this.setState({ wallet: e.target.value });
    console.log(this.state.wallet)
    this.renew();
  };
  updateEmail = async e => {
    await this.setState({ email: e.target.value });
    console.log(this.state.email)

    this.renew();
  };
  updateUAH = async e => {
    await this.setState({
      uah: e.target.value,
      btc: ""
    });
    this.setState({
      btc: this.state.uah
        ? (
            this.state.uah /
            1.1 /
            (this.state.priceBTC * this.state.priceUSD)
          ).toFixed(8)
        : ""
    });
    this.renew();
  };
  updateBTC = async e => {
    await this.setState({
      btc: e.target.value,
      uah: ""
    });
    this.setState({
      uah: this.state.btc
        ? (
            this.state.btc *
            this.state.priceBTC *
            this.state.priceUSD *
            1.1
          ).toFixed(2)
        : ""
    });
    this.renew();
  };
  renew = () => {
    const id = Date.now() + "a" + Math.floor(Math.random() * 10 + 1);
    const json_string = {
      version: "3",
      public_key: "i6910192592",
      action: "pay",
      amount: this.state.uah,
      currency: "UAH",
      description: `${this.state.registeredApp ? `Користувач levelApp ` : 'Користувач '} ${this.state.wallet} купив ${this.state.btc}BTC за ₴${this.state.uah}. Його пошта - ${this.state.email}`,
      email: this.state.email,
      order_id: id,
      info: `${this.state.registeredApp ? `Користувач levelApp ` : 'Користувач '} ${this.state.wallet} купив ${this.state.btc}BTC за ₴${this.state.uah}. Його пошта - ${this.state.email}`
    };
    const data = new Buffer(JSON.stringify(json_string)).toString("base64");
    const priv = "3fUHAoOdtwEp1bKmbyTYSYBRrRzL4Xltr3Be6Lf6";
    const sign_string = priv + data + priv;
    const hash = crypto.createHash("sha1").update(sign_string);
    this.setState({ signature: hash.digest("base64"), data });
  };

  submit = async () => {
    console.log(this.state.signature);
    console.log(this.state.data);
    this.form.current.submit();
  };

  registeredUser = e => {
    this.setState({ registeredApp: !this.state.registeredApp });
  };

    render() {
      const { messages } = this.props;
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
        <h3 className="section-title">{messages.title}</h3>
        <p className="section-subtitle">{messages.subtitle}</p>

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
                        </Slider>
                    </div>
          </div>



        <p className="help-info">
          {messages.commision}: $
          {parseFloat(this.state.priceUSD * 1.1 - this.state.priceUSD).toFixed(
            2
          )}
        </p>
        <p className="help-info">
          {messages.price}: 1 BTC ${parseFloat(this.state.priceBTC * 1.1).toFixed(2)} ~ ₴
          {parseFloat(this.state.priceUSD * this.state.priceBTC * 1.1).toFixed(
            2
          )}
        </p>

        <div className="buying-container">
        <div className="row">
          <div className="one-half column">
            <div className="form-container">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="question"
                  name="question"
                  onClick={this.registeredUser}
                  value={this.state.registeredApp}
                />
                <label htmlFor="question">{messages.question}</label>
              </div>
              <div className="inputs-container">
                <input
                  placeholder={
                    this.state.registeredApp
                      ? messages.form.registeredApp.username
                      : messages.form.registeredApp.btc
                  }
                  className="full-input"
                  value={this.state.wallet}
                  onChange={this.updateWallet}
                />
                <input
                  placeholder={messages.form.btc}
                  className="half-input"
                  value={this.state.btc}
                  onChange={this.updateBTC}
                />
                <input
                  placeholder={messages.form.uah}
                  className="half-input"
                  value={this.state.uah}
                  onChange={this.updateUAH}
                />
                <input
                  placeholder={messages.form.email}
                  className="full-input"
                  value={this.state.email}
                  onChange={this.updateEmail}
                />
              </div>
              <form
                method="POST"
                ref={this.form}
                action="https://www.liqpay.ua/api/3/checkout"
                acceptCharset="utf-8"
              >
                <input type="hidden" name="data" value={this.state.data} />
                <input
                  type="hidden"
                  name="signature"
                  value={this.state.signature}
                />
                <div className="button" onClick={this.submit}>
                  <span>{messages.form.buttom}</span>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="one-half column buying-text">
              <p>
                {messages.buyingText1}
              </p>
              <p>
                {messages.buyingText2}
              </p>
              <h4>{messages.question2}</h4>
              <a href="#">{messages.install}</a>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section4;
