import React from "react";

class Compare extends React.Component {
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
    this.setState({windowWidthVal: window.innerWidth})
  };

  render() {
    return (
      <section className="compare">
        <h2 className="compare__title">Comparison table</h2>
        {(this.state.windowWidthVal > 767) ? (
          <table className="compare__table">
            <thead>
              <tr>
                <th />
                <th>
                  <span>Spend cryptocurrency</span>
                </th>
                <th>
                  <span>Buy cryptocurrency</span>
                </th>
                <th>
                  <span>Immediate transactions</span>
                </th>
                <th>
                  <span>P to P transferss</span>
                </th>
                <th>
                  <span>NFC payment</span>
                </th>
                <th>
                  <span>Cryprocurrencies exchange</span>
                </th>
                <th>
                  <span>Biometrics security</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="selected">
                <td>Level</td>
                <td className="checked" />
                <td className="checked" />
                <td className="checked" />
                <td className="checked" />
                <td className="checked" />
                <td className="checked" />
                <td>TouchID and FaceID</td>
              </tr>
              <tr>
                <td>MCO</td>
                <td className="checked" />
                <td className="checked" />
                <td className="checked" />
                <td className="checked" />
                <td className="checked" />
                <td className="checked" />
                <td className="checked" />
              </tr>
              <tr>
                <td>TenX</td>
                <td className="checked" />
                <td />
                <td className="checked" />
                <td className="checked" />
                <td />
                <td />
                <td className="checked" />
              </tr>
              <tr>
                <td>Bonpay</td>
                <td className="checked" />
                <td />
                <td />
                <td className="checked" />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>Bpay</td>
                <td className="checked" />
                <td />
                <td />
                <td className="checked" />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>BelugaPay</td>
                <td className="checked" />
                <td />
                <td className="checked" />
                <td className="checked" />
                <td className="checked" />
                <td />
                <td className="checked" />
              </tr>
              <tr>
                <td>CopPay</td>
                <td className="checked" />
                <td />
                <td />
                <td className="checked" />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>ErosCoin</td>
                <td className="checked" />
                <td />
                <td />
                <td className="checked" />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>Nuggets</td>
                <td />
                <td />
                <td />
                <td className="checked" />
                <td />
                <td />
                <td className="checked" />
              </tr>
              <tr>
                <td>STK</td>
                <td className="checked" />
                <td />
                <td className="checked" />
                <td className="checked" />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td>Viso</td>
                <td className="checked" />
                <td />
                <td className="checked" />
                <td />
                <td className="checked" />
                <td className="checked" />
                <td />
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="compare__table-wrap">
            <div className="compare__fixed-col">
              <div />
              <div>
                Spend <br /> cryptocurrency{" "}
              </div>
              <div>
                Buy <br /> cryptocurrency{" "}
              </div>
              <div>
                Immediate <br /> transactions{" "}
              </div>
              <div>
                P to P <br /> transferss{" "}
              </div>
              <div>
                NFC <br /> payment{" "}
              </div>
              <div>
                Cryprocrrencies <br /> exchange{" "}
              </div>
              <div>
                Biometrics <br /> security{" "}
              </div>
            </div>
            <table className="compare__table">
              <thead>
                <tr>
                  <th className="selected">
                    <span>Level</span>
                  </th>
                  <th>
                    <span>MCO</span>
                  </th>
                  <th>
                    <span>TenX</span>
                  </th>
                  <th>
                    <span>Bonpay</span>
                  </th>
                  <th>
                    <span>Bpay</span>
                  </th>
                  <th>
                    <span>BelugaPay</span>
                  </th>
                  <th>
                    <span>CopPay</span>
                  </th>
                  <th>
                    <span>ErosPay</span>
                  </th>
                  <th>
                    <span>Nuggets</span>
                  </th>
                  <th>
                    <span>STK</span>
                  </th>
                  <th>
                    <span>Viso</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td />
                  <td className="checked" />
                  <td className="checked" />
                </tr>
                <tr>
                  <td className="checked" />
                  <td className="checked" />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td />
                  <td />
                  <td className="checked" />
                  <td />
                  <td />
                  <td />
                  <td className="checked" />
                  <td className="checked" />
                </tr>
                <tr>
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td className="checked" />
                  <td />
                </tr>
                <tr>
                  <td className="checked" />
                  <td className="checked" />
                  <td />
                  <td />
                  <td />
                  <td className="checked" />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td className="checked" />
                </tr>
                <tr>
                  <td className="checked" />
                  <td className="checked" />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td className="checked" />
                </tr>
                <tr>
                  <td>
                    TouchID <br /> and FaceID
                  </td>
                  <td className="checked" />
                  <td className="checked" />
                  <td />
                  <td />
                  <td className="checked" />
                  <td />
                  <td />
                  <td className="checked" />
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
    );
  }
}

export default Compare;
