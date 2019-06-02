import React, { Component } from "react";
import Slider from "react-slick";
import yobit from "./yobit.svg";
import b2b from "./b2b.svg";
import b2bImage from "./b2bImg.svg";
import yobitImg from "./yobitImg.svg";

class TradeMarkets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "b2b"
    };
  }

  onClick = () => {
    let win = window.open(this.state.active === 'b2b' ? 'https://p2pb2b.io/trade/LVL_BTC' : 'https://yobit.io/trade/LVL/BTC', '_blank');
    win.focus();
  } 

  render() {
    const { messages } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      // adaptiveHeight: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 728,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ],
      beforeChange: async (current, next) => {
        console.log("TCL: TradeMarkets -> render -> next", next);
        await this.setState({ active: next === 1 ? "yobit" : "b2b" });
        console.log(this.state.active);
      }
    };
    return (
      <section className="trade-markets">
        <h3 className="section-title">
          {messages[`title-${this.state.active}`]}
        </h3>
        <Slider {...settings}>
          <img src={b2b} className={this.state.active==='b2b' ? "" : "coin-img__disabled"} onClick={() => this.setState({ active: "b2b" })} />
          <img src={yobit} className={this.state.active==='yobit' ? "" : "coin-img__disabled"} onClick={() => this.setState({ active: "yobit" })} />
        </Slider>
        <div className="body">
          <div className="content">
            <div className="sub-title">
              <h5 className="section-subtitle">{messages[`title-${this.state.active}`]}</h5>
              <p><span className="supplies">{messages.supplies}</span> <span className="money">10.000.000.000 LVL</span></p>
            </div>
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: this.props.messages[`body-${this.state.active}`]
              }}
            />
             <div className={`button`} onClick={this.onClick}>
                  <span>{messages.start}</span>
                </div>
          </div>
          <div className="image-column" style={{
            width: '50%',
            height: "400px",
            backgroundImage: `url(${this.state.active === 'b2b' ? b2bImage : yobitImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            {/* <img style={{with: '100%'}}src={this.state.active === 'b2b' ? b2bImage : yobitImg}/> */}
            {/* <div className="social">{messages.social}</div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default TradeMarkets;
