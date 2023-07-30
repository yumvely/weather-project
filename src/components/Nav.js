import React, { Component } from 'react';
import '../style/nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="container">
                <div className="content-box">
                    <div className="main">
                        <nav>
                                {/* <a href="test.html"> */}
                                    <div className="box nav-btn">
                                        <img src={ require('../img/clock.png') } alt={`clock`} style={{width: '45px'}} />
                                        <p className="nav-text">시간별 날씨</p>
                                    </div>
                                {/* </a> */}
                                {/* <a href="test.html"> */}
                                    <div className="box nav-btn">
                                        <img src={ require('../img/map.png') } alt={`map`} style={{width: '65px'}} />   
                                        <p className="nav-text">전국 날씨</p>
                                    </div>
                                {/* </a> */}
                                {/* <a href="test.html"> */}
                                    <div className="box nav-btn">
                                        <img src={ require('../img/cloth.png') } alt={`cloth`} style={{width: '50px'}} />
                                        <p className="nav-text">오늘의 스타일</p>
                                    </div>
                                {/* </a> */}
                                {/* <a href="test.html"> */}
                                    <div className="box nav-btn">
                                        <img src={ require('../img/spot.png') } alt={`spot`} style={{width: '49px'}} />
                                        <p className="nav-text">오늘의 스팟</p>
                                    </div>
                                {/* </a> */}
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav