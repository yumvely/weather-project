import React, { Component } from 'react';
import '../style/searchbar.css';

class Searchbar extends Component {
    render() {
        return (
                <div id="container">
                    <div id="location">
                        <span>서울시 강남구 논현동</span>
                    </div>
                    <div id="search_bar">
                        <div class="bar">
                            <input type="text" placeholder="지역을 검색해 주세요"/>
                            <button className="search-btn">
                                <img src={ require('../img/fairy_half.png') } alt={`small fairy`} style={{width: '37px'}} />
                            </button>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Searchbar


