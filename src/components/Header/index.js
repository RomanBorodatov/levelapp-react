import React, { Component } from 'react';
import logo from '../../static/logo.png';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            responsive: false,
        }
        this.toggleResponsive = this.toggleResponsive.bind(this);
        this.scroll = this.scroll.bind(this);
    }

    toggleResponsive() {
        this.setState({
            responsive: !this.state.responsive
        })
    }

    scroll(event) {
        event.preventDefault();
        let hashval = event.target.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        window.history.pushState(null, null, hashval);
        this.toggleResponsive();
    }

    render() {
        return (
            <header>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className={`nav ${this.state.responsive ? 'responsive' : ''}`} id="nav">
                    <li className="nav-item"><a href="#features" onClick={this.scroll}>Features and MVP</a></li>
                    <li className="nav-item"><a href="#research" onClick={this.scroll}>Market research</a></li>
                    <li><a target="_blank" href="https://www.instagram.com/levelapp_ico/"><i className="fab fa-instagram"></i></a></li>
                    <li><a target="_blank" href="https://t.me/levelapp_ico"><i className="fab fa-telegram-plane"></i></a></li>
                </ul>
                <span className="icon" onClick={this.toggleResponsive}>
                    <i className="fas fa-bars"></i>
                </span>
            </header>
        );
    }
}

export default Header;

 
// for (let item of anchorlinks) {  
//     item.addEventListener('click', (e)=> {
//         let hashval = item.getAttribute('href')
//         let target = document.querySelector(hashval)
//         target.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//         history.pushState(null, null, hashval)
//         toggleNav()
//         e.preventDefault()
//     })
// }