import React, { Component } from 'react';
import '../style/temp.css';

class Temp extends Component {
    render() {
        return (
            <div className="container">
                <div className="content-box">
                    <div className="aside">
                        <div className="box temp-box">
                            <div className="temp">13.9℃</div>
                            <div className="temp-sensory">체감(15.4℃)</div>
                            <div className="temp-yest">어제보다 3℃ 추운디요</div>
                            <div className="weather-summary">
                                <div className="weather-icon">
                                    <img src={ require('../img/humidity.png') } alt={`humidity`} style={{width: '40px'}} />
                                    <p className="weather-text">습도</p>
                                    <p className="figure">75%</p>
                                </div>
                                <div className="weather-icon">
                                    <img src={ require('../img/wind.png') } alt={`wind`} style={{width: '40px'}} />
                                    <p className="weather-text">바람</p>
                                    <p className="figure">북동 4.2m/s</p>
                                </div>
                                <div>
                                    <img src={ require('../img/precipitation.png') } alt={`precipitation`} style={{width: '40px'}} />
                                    <p className="weather-text">강수량</p>
                                    <p className="figure">시간당 10mm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Temp