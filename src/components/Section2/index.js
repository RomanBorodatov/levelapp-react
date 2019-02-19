import React, { Component } from 'react';
import video from '../../static/video.mp4';
import play from '../../static/play.png';
import messages from '../../locale/messages';

class Section2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false
        }
        this.player = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.playing) {
            this.player.current.pause();
            this.setState({
                playing: false
            })
        } else {
            this.player.current.play();
            this.setState({
                playing: true
            })
        }
    }

    render() {
        const { messages } = this.props;
        return (
            <section className="section-2">
                <h3 className="section-title">{messages.title}</h3>
                <div className="video-container" onClick={this.handleClick}>
                    <video src={video} id="video" ref={this.player}></video>
                    <div className={`video-overlay ${this.state.playing ? 'hide' : ''}`} id="video-control">
                        <div className="play">
                            <div className="image">
                                <img src={play} alt="play" />
                            </div>
                            <span>{messages.video}</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section2;