import React, { Component } from 'react';
import '../style/header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div id="h-logo">
                    <img src={ require('../img/logo.png') } alt={`logo`} style={{height: '12vh'}} />
                </div>
                {/* <Link to="/about">About</Link>
                    <a href="index.html">
                    <img id="logo" src="img/logo.png" alt="로고" width="220px">
                    </a> */}
            </header>
        );
    }
}

export default Header
//   #logo {
//     object-fit: contain;
//   }