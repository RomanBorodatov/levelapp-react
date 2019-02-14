import React, { Component } from 'react';
import video from '../../static/video.mp4';
import play from '../../static/play.png';

class Section2 extends Component {
  render() {
    return (
        <section className="section-2">
            <h3 className="section-title">LevelApp - Buy and spend crypto with Apple Pay!</h3>
            <div className="video-container">
                <video src={video} id="video"></video>
                <div className="video-overlay" id="video-control">
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