import './App.css';
import './index.css';
import fairyHalf from './img/fairy_half.png';
import clock from './img/clock.png';
import logo from './img/logo.png';
import map from './img/map.png';
import cloth from './img/cloth.png';
import spot from './img/spot.png';
import precipitation from './img/precipitation.png';

function App() {
  const mapSize = {
    width : "700px",
    height : "350px"
  };

  const mapInterval = {
    height : "40px"
  }

  const navPosition = {
    position: "absolute",
    left: "5%",
    top: "15%",
    display: "inline-block",
    width: "100px",
    height: "100px"
  };

  const navHeight = {
    height : "10px"
  };

  const mapBtnLayout = {
    width:"600px",
    height:"auto"
  };

  const mapBtn = {
    paddingTop:"20px",
    paddingBottom:"20px",
    width:"140px",
    height:"100%",
    textAlign:"center",
    display:"inline-block"
  };

  const mapBtnInterval = {
    width:"70px",
    display:"inline-block"
  };

  const tempBoxSize = {
    width:"500px",
    height:"200px"
  };

  const tempBoxSizeInterval = {
    width:"500px",
    height:"50px"
  };

  const temperatureFontSize = {
    fontSize: "8px"
  };

  const precipitationFontSize = {
    fontSize: "10px"
  }

  return (
    <div id="wrap">
        <div id="h-logo">
            <a href="index.html"><img id="logo" src={logo} alt="로고" width="220px"/></a>
        </div>
        <nav style={navPosition}>
            <a href="test.html">
                <div className="box nav-btn">
                        <img src={clock} alt="시간별 날씨 아이콘" width="50px"/>
                        <p className="nav-text">시간별 날씨</p>
                </div>
            </a>
            <div style={navHeight}></div>
            <a href="test.html">
                <div className="box nav-btn">
                    <img src={map} alt="시간별 날씨 아이콘" width="50px"/>
                    <p className="nav-text">전국 날씨</p>
                </div>
            </a>            
            <div style={navHeight}></div>
            <a href="test.html">
                <div className="box nav-btn">
                    <img src={cloth} alt="시간별 날씨 아이콘" width="50px"/>
                    <p className="nav-text">오늘의 스타일</p>
                </div>
            </a>            
            <div style={navHeight}></div>
            <a href="test.html">
                <div className="box nav-btn">
                    <img src={spot} alt="시간별 날씨 아이콘" width="50px"/>
                    <p className="nav-text">오늘의 스팟</p>
                </div>
            </a>
        </nav>
        
        <div id="container">
            <div id="location">
                <span>서울시 강남구 논현동</span>
            </div>
            <div id="search_bar">
                <div className="bar">
                    <input type="text" placeholder="지역을 검색해 주세요"/>
                    <button className="search-btn">
                        <img src={fairyHalf} alt="날씨요정" width="37px"/>
                    </button>
                </div>
            </div>
            <div id="content-box">
                
              <div id="main">
                  <div id="mapBtn" style={mapBtnLayout}>
                      <div className="box" style={mapBtn}>
                          <span>현재</span>
                      </div>
                      <div style={mapBtnInterval}></div>
                      <div className="box" style={mapBtn}>
                          <span>내일</span>
                      </div>
                      <div style={mapBtnInterval}></div>
                      <div className="box" style={mapBtn}>
                          <span>모레</span>
                      </div>
                  </div>
                  <div style={mapInterval}></div>
                  <div id="map" style={mapSize}></div>
              </div>

              <div id="aside">
                <div className="box temp-box" style={tempBoxSize}>
                    <div className="temp">13.9℃</div>
                    <div className="temp-sensory">체감(15.4℃)</div>
                    <div className="temp-yest">어제보다 3℃ 추운디요</div>
                </div>

                <div style={tempBoxSizeInterval}/>
                  
                <div className="white-box temp-box" style={tempBoxSize}>
                  <table id="tb">
                      <tr></tr>
                      <tr>
                          <td>16시</td>
                          <td>17시</td>
                          <td>18시</td>
                          <td>19시</td>
                          <td>20시</td>
                          <td>21시</td>
                          <td>22시</td>
                          <td>23시</td>
                          <td>0시</td>
                          <td>1시</td>
                          <td>2시</td>
                          <td>3시</td>
                      </tr>
                      <tr>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                          <td><img src={precipitation} width="20px" height="20px"/></td>
                      </tr>
                      <tr style={temperatureFontSize}>
                          <td>25°C</td>
                          <td>25°C</td>
                          <td>25°C</td>
                          <td>25°C</td>
                          <td>25°C</td>
                          <td>25°C</td>
                          <td>25°C</td>
                          <td>25°C</td>
                          <td>25°C</td>
                          <td>25°C</td>
                          <td>25°C</td>
                          <td>25°C</td>
                      </tr>
                      <tr style={precipitationFontSize}>
                          <td>60%</td>
                          <td>60%</td>
                          <td>60%</td>
                          <td>60%</td>
                          <td>60%</td>
                          <td>60%</td>
                          <td>60%</td>
                          <td>60%</td>
                          <td>60%</td>
                          <td>60%</td>
                          <td>60%</td>
                          <td>60%</td>
                      </tr>
                  </table>
                </div>
              </div>

            </div>
        </div>
    </div>
  );
}

export default App;
