import React, {Component} from 'react';

class MarketResearch extends Component {
  render(){
    return (
  <section className="market">
    <div className="market__stat-block">
      <div className="market__wrap">
        <span className="market__note" v-html="$t('pages.research.note')">
        </span>
        <h2 className="market__title" v-html="$t('pages.research.title')"></h2>
      </div>
      <ul className="market__list">
        <li className="market__col" data-aos="zoom-in" data-aos-duration="600">
          <span className="market__col-value" v-html="$t('pages.research.list1.value')"></span>
          <span className="market__col-name" v-html="$t('pages.research.list1.text')"></span>
        </li>
        <li className="market__col" data-aos="zoom-in" data-aos-duration="600">
          <span className="market__col-value" v-html="$t('pages.research.list2.value')"></span>
          <span className="market__col-name" v-html="$t('pages.research.list2.text')"></span>
        </li>
        <li className="market__col" data-aos="zoom-in" data-aos-duration="600">
          <span className="market__col-value" v-html="$t('pages.research.list3.value')"></span>
          <span className="market__col-name" v-html="$t('pages.research.list3.text')"></span>
        </li>
      </ul>
    </div>
    <div className="market__visual-block">
      <div className="market__wrap">
        <span className="market__image-title" v-html="$t('pages.research.subtitle')"></span>
        <span className="market__descr" v-html="$t('pages.research.descr')"></span>
      </div>
      <div className="market__line-chart">
        <div className="visual">
          <div data-aos="fade-up" data-aos-duration="1000">
            <svg  className="market__line-chart-grid" xmlns="http://www.w3.org/2000/svg" width="822" viewBox="0 0 822 417">
              <g fill="none" fillRule="evenodd">
                <text fill="#4B5E6E" fontFamily="Montserrat-Bold, Montserrat" fontSize="14" fontWeight="bold" transform="translate(0 -5)">
                  <tspan x="0" y="293">3,8%</tspan>
                </text>
                <text fill="#4B5E6E" fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -5)">
                  <tspan x="118" y="210">6,5</tspan>
                </text>
                <text fill="#4B5E6E" fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -5)">
                  <tspan x="181" y="231">5,7</tspan>
                </text>
                <text fill="#4B5E6E" fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -5)">
                  <tspan x="243" y="186">7,2</tspan>
                </text>
                <text fill="#4B5E6E" fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -5)">
                  <tspan x="346" y="93">10,1</tspan>
                </text>
                <text fill="#4B5E6E" fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -5)">
                  <tspan x="408" y="81">10,4</tspan>
                </text>
                <text fill="#4B5E6E" fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -5)">
                  <tspan x="471" y="83">10,3</tspan>
                </text>
                <text fill="#4B5E6E" fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -5)">
                  <tspan x="599" y="111">9,5</tspan>
                </text>
                <text fill="#4B5E6E" fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -5)">
                  <tspan x="654" y="81">10,7</tspan>
                </text>
                <text fill="#4B5E6E" fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -5)">
                  <tspan x="714" y="76">10,8</tspan>
                </text>
                <text fill="#4B5E6E" fontFamily="Montserrat-Bold, Montserrat" fontSize="24" fontWeight="bold" transform="translate(0 -5)">
                  <tspan x="756" y="23">12,8%</tspan>
                </text>
                <path fill="#00A3FF" fillRule="nonzero" d="M779 39h20v378h-20zM719 90h20v326h-20zM659 95h20v321h-20zM599 125h20v291h-20zM471 97h22v319h-22zM409 95h22v321h-22zM347 107h22v310h-22zM241 195h22v222h-22zM179 245h22v172h-22zM117 224h22v193h-22zM2 307h22v110H2z"/>
              </g>
            </svg>
          </div>
        </div>
        <figure className="background">
          <svg className="market__line-chart-bg" xmlns="http://www.w3.org/2000/svg" width="944" viewBox="0 0 944 434">
            <g fill="#4B5E6E" fillRule="evenodd">
              <path fillOpacity=".07" fillRule="nonzero" d="M34 5h910v1H34z"/>
              <path fillOpacity=".12" fillRule="nonzero" d="M34 65h910v1H34z"/>
              <path fillOpacity=".2" fillRule="nonzero" d="M34 125h910v1H34zM34 185h910v1H34zM34 245h910v1H34zM34 305h910v1H34zM34 365h910v1H34z"/>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -4)">
                <tspan x="3" y="374">0%</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -4)">
                <tspan x="3" y="314">2%</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -4)">
                <tspan x="3" y="254">4%</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -4)">
                <tspan x="3" y="193">6%</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(0 -4)">
                <tspan x="3" y="135">8%</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" opacity=".5" transform="translate(0 -4)">
                <tspan x="0" y="74">10%</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" opacity=".25" transform="translate(0 -4)">
                <tspan x="1" y="14">12%</tspan>
              </text>
              <text fontFamily="Montserrat-Bold, Montserrat" fontSize="18" fontWeight="bold" transform="translate(91 388)">
                <tspan x="115" y="45">2015</tspan>
              </text>
              <text fontFamily="Montserrat-Bold, Montserrat" fontSize="18" fontWeight="bold" transform="translate(91 388)">
                <tspan x="0" y="45">2014</tspan>
              </text>
              <text fontFamily="Montserrat-Bold, Montserrat" fontSize="18" fontWeight="bold" transform="translate(91 388)">
                <tspan x="349" y="45">2016</tspan>
              </text>
              <text fontFamily="Montserrat-Bold, Montserrat" fontSize="18" fontWeight="bold" transform="translate(91 388)">
                <tspan x="600" y="45">2017</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="0" y="14">Nov</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="115" y="14">Mar</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="180" y="14">Jun </tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="241" y="14">Oct</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="349" y="14">Mar </tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="411" y="14">Jun</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="473" y="14">Oct</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="600" y="14">Mar</tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="658" y="14">Jun </tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="718" y="14">Sep </tspan>
              </text>
              <text fontFamily="Montserrat-Regular, Montserrat" fontSize="14" transform="translate(91 388)">
                <tspan x="779" y="14">Dec</tspan>
              </text>
            </g>
          </svg>
        </figure>
      </div>
      <div className="market__line-chart market__line-chart--mobile">
        <figure className="visual">
          <svg width="321px" viewBox="0 0 321 395" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <title>84391D8F-2649-4C76-A68D-3454E11CB4A1</title>
            <desc>Created with sketchtool.</desc>
            <defs></defs>
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Artboard-10" transform="translate(-34.000000, -11.000000)">
                <g id="graph_375" transform="translate(34.000000, 8.000000)">
                  <rect id="Rectangle-4" fill="#00A3FF" fillRule="nonzero" x="300" y="20" width="12" height="377"></rect>
                  <rect id="Rectangle-4-Copy" fill="#00A3FF" fillRule="nonzero" x="276" y="71" width="12" height="326"></rect>
                  <rect id="Rectangle-4-Copy-2" fill="#00A3FF" fillRule="nonzero" x="252" y="76" width="12" height="321"></rect>
                  <rect id="Rectangle-4-Copy-3" fill="#00A3FF" fillRule="nonzero" x="228" y="106" width="12" height="291"></rect>
                  <rect id="Rectangle-4-Copy-7" fill="#00A3FF" fillRule="nonzero" x="96" y="176" width="12" height="222"></rect>
                  <rect id="Rectangle-4-Copy-8" fill="#00A3FF" fillRule="nonzero" x="72" y="226" width="12" height="172"></rect>
                  <rect id="Rectangle-4-Copy-9" fill="#00A3FF" fillRule="nonzero" x="48" y="205" width="12" height="193"></rect>
                  <rect id="Rectangle-4-Copy-10" fill="#00A3FF" fillRule="nonzero" x="6" y="288" width="12" height="110"></rect>
                  <text id="12,8%" fontFamily="Montserrat-Bold, Montserrat" fontSize="11" fontWeight="bold" fill="#4B5E6E">
                    <tspan x="290" y="11">12,8%</tspan>
                  </text>
                  <text id="10,8" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="271" y="60">10,8</tspan>
                  </text>
                  <text id="10,7" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="245" y="67">10,7</tspan>
                  </text>
                  <text id="9,5" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="225" y="94">9,5</tspan>
                  </text>
                  <text id="10,3" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="181" y="71">10,3</tspan>
                  </text>
                  <text id="10,4" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="155" y="63">10,4</tspan>
                  </text>
                  <text id="10,1" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="134" y="77">10,1</tspan>
                  </text>
                  <text id="7,2" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="94" y="169">7,2</tspan>
                  </text>
                  <text id="5,7" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="70" y="214">5,7</tspan>
                  </text>
                  <text id="6,5" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="45" y="197">6,5</tspan>
                  </text>
                  <text id="3,8%" fontFamily="Montserrat-Bold, Montserrat" fontSize="11" fontWeight="bold" fill="#4B5E6E">
                    <tspan x="0" y="273">3,8%</tspan>
                  </text>
                  <rect id="Rectangle-4-Copy-4" fill="#00A3FF" fillRule="nonzero" x="186" y="78" width="12" height="319"></rect>
                  <rect id="Rectangle-4-Copy-5" fill="#00A3FF" fillRule="nonzero" x="162" y="76" width="12" height="321"></rect>
                  <rect id="Rectangle-4-Copy-6" fill="#00A3FF" fillRule="nonzero" x="138" y="88" width="12" height="310"></rect>
                </g>
              </g>
            </g>
          </svg>
        </figure>
        <figure className="background">
          <svg width="356px" viewBox="0 0 356 409" version="1.1" xmlns="http://www.w3.org/2000/svg" >
           
            <title>97F33AA1-379C-463C-901C-786C6606F29D</title>
            <desc>Created with sketchtool.</desc>
            <defs></defs>
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Artboard-10" transform="translate(1.000000, -40.000000)">
                <g id="bg_graph_375" transform="translate(-1.000000, 38.000000)">
                  <rect id="Rectangle-Copy-2" fillOpacity="0.07" fill="#4B5E6E" fillRule="nonzero" x="27" y="7" width="329" height="1"></rect>
                  <rect id="Rectangle-Copy-3" fillOpacity="0.12" fill="#4B5E6E" fillRule="nonzero" x="27" y="67" width="329" height="1"></rect>
                  <rect id="Rectangle-Copy-4" fillOpacity="0.2" fill="#4B5E6E" fillRule="nonzero" x="27" y="127" width="329" height="1"></rect>
                  <rect id="Rectangle-Copy-5" fillOpacity="0.2" fill="#4B5E6E" fillRule="nonzero" x="27" y="187" width="329" height="1"></rect>
                  <rect id="Rectangle-Copy-6" fillOpacity="0.2" fill="#4B5E6E" fillRule="nonzero" x="27" y="247" width="329" height="1"></rect>
                  <rect id="Rectangle-Copy-7" fillOpacity="0.2" fill="#4B5E6E" fillRule="nonzero" x="27" y="307" width="329" height="1"></rect>
                  <text id="0%" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="3" y="372">0%</tspan>
                  </text>
                  <text id="2%" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="3" y="312">2%</tspan>
                  </text>
                  <text id="4%" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="3" y="252">4%</tspan>
                  </text>
                  <text id="6%" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="3" y="191">6%</tspan>
                  </text>
                  <text id="8%" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="3" y="133">8%</tspan>
                  </text>
                  <text id="10%" opacity="0.5" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="0" y="72">10%</tspan>
                  </text>
                  <text id="12%" opacity="0.25" fontFamily="Montserrat-Regular, Montserrat" fontSize="12" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="1" y="12">12%</tspan>
                  </text>
                  <path d="" id="Path-4" stroke="#979797" fillRule="nonzero"></path>
                  <text id="Dec" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="331" y="391">Dec</tspan>
                  </text>
                  <text id="2014" fontFamily="Montserrat-Bold, Montserrat" fontSize="11" fontWeight="bold" fill="#4B5E6E">
                    <tspan x="36" y="410">2014</tspan>
                  </text>
                  <text id="Nov" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="36" y="391">Nov</tspan>
                  </text>
                  <text id="2015" fontFamily="Montserrat-Bold, Montserrat" fontSize="11" fontWeight="bold" fill="#4B5E6E">
                    <tspan x="78" y="410">2015</tspan>
                  </text>
                  <text id="Mar" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="78" y="391">Mar</tspan>
                  </text>
                  <text id="Jun" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="103" y="391">Jun </tspan>
                  </text>
                  <text id="Oct" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="127" y="391">Oct</tspan>
                  </text>
                  <text id="2016" fontFamily="Montserrat-Bold, Montserrat" fontSize="11" fontWeight="bold" fill="#4B5E6E">
                    <tspan x="167" y="410">2016</tspan>
                  </text>
                  <text id="Mar" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="167" y="391">Mar </tspan>
                  </text>
                  <text id="Jun" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="192" y="391">Jun</tspan>
                  </text>
                  <text id="Oct" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="216" y="391">Oct</tspan>
                  </text>
                  <text id="2017" fontFamily="Montserrat-Bold, Montserrat" fontSize="11" fontWeight="bold" fill="#4B5E6E">
                    <tspan x="257" y="410">2017</tspan>
                  </text>
                  <text id="Mar" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="258" y="391">Mar</tspan>
                  </text>
                  <text id="Jun" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="283" y="391">Jun </tspan>
                  </text>
                  <text id="Sep" fontFamily="Montserrat-Regular, Montserrat" fontSize="11" fontWeight="normal" fill="#4B5E6E">
                    <tspan x="307" y="391">Sep </tspan>
                  </text>
                  <rect id="Rectangle-Copy-8" fillOpacity="0.2" fill="#4B5E6E" fillRule="nonzero" x="27" y="367" width="329" height="1"></rect>
                </g>
              </g>
            </g>
          </svg>
        </figure>
      </div>
    </div>
  </section>
    )
  }
}

export default MarketResearch;