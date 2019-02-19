import React from "react";
import Header from "../Header";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import Section5 from "../Section5";
import Section6 from "../Section6";
import Section7 from "../Section7";
import Section8 from "../Section8";
import Section9 from "../Section9";
import Footer from "../Footer";
import Compare from "../Compare";
import Map from "../Map";
import Documents from "../Documents";
import RoadMap from "../Roadmap";
import Team from "../Team";
import locales from '../../locale/messages'


class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: locales.en,
      language: 'en'
    };
  }

  async componentDidMount() {
    if (/\/ru/g.test(this.props.location.pathname)) {
      await this.setState({ messages: locales.ru, language: 'ru' });
    } else {
      await this.setState({ messages: locales.en, language: 'en' });
    }
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Header location={this.props.location.pathname} messages={this.state.messages.header}/>
        <Section1 messages={this.state.messages.section1} />
        <Section2 messages={this.state.messages.section2} />
        <Section3 messages={this.state.messages.section3} />
        <Section4 messages={this.state.messages.section4} />
        <Section5 messages={this.state.messages.section5} />
        <Section6 messages={this.state.messages.section6} />
        <Section7 messages={this.state.messages.section7} />
        <Section8 messages={this.state.messages.section8} />
        <Section9 messages={this.state.messages.section9} />
        <Compare messages={this.state.messages.compare}/>
        <Map messages={this.state.messages.map}/>
        <RoadMap messages={this.state.messages.roadmap} />
        <Team messages={this.state.messages.team}/>
        <Documents messages={this.state.messages.documents} />
        <Footer messages={this.state.messages.footer} />
      </div>
    );
  }
}

export default Body;
