import React, { Component } from 'react';
import video from '../../static/video.mp4';
import play from '../../static/play.png';

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
        return (
            <section className="section-2">
                <h3 className="section-title">LevelApp - Buy and spend crypto with Apple Pay!</h3>
                <div className="video-container" onClick={this.handleClick}>
                    <video src={video} id="video" ref={this.player}></video>
                    <div className={`video-overlay ${this.state.playing ? 'hide' : ''}`} id="video-control">
                        <div className="play">
                            <div className="image">
                                <img src={play} alt="play" />
                            </div>
                            <span>WATCH VIDEO</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section2;