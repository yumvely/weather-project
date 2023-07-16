import React, { Component } from 'react';

class Navi extends Component{
    render() {
      return (
        <nav>
              <ul>
                  <li>
                  <a href="test.html">
                        <div className="box nav-btn">
                            <img src="img/map.png" alt="전국 날씨 아이콘" width="65px"/>
                            <p className="nav-text">전국 날씨</p>
                        </div>
                    </a>
                  </li>
                  <li>
                    <a href="test.html">
                        <div className="box nav-btn">
                            <img src="img/cloth.png" alt="오늘의 스타일 아이콘" width="50px"/>
                            <p className="nav-text">오늘의 스타일</p>
                        </div>
                    </a>
                  </li>
                  <li>
                    <a href="test.html">
                        <div className="box nav-btn">
                            <img src="img/spot.png" alt="오늘의 스팟 아이콘" width="49px"/>
                            <p className="nav-text">오늘의 스팟</p>
                        </div>
                    </a>
                  </li>
              </ul>
          </nav>
      );
    }
  }

  export default Navi
  