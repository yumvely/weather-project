import React, { Component } from 'react';
import '../style/fortune.css';

class Fortune extends Component {
    render() {
        return (
            <div className="container">
                <div className="content-box">
                    <div className="aside">
                        <div className="box fortune-box">
                            <div id="fairy">
                                <img src={ require('../img/fairy.png') } alt={`fairy`} style={{width: '75px'}} />
                            </div>
                            <div className="fortune-text">
                                <div id="fortune-title">날씨요정의 운세</div>
                                <div id="fortune">"나는 노동자, 슬픈 내 눈동자"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Fortune