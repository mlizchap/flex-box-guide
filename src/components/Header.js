import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../globalStyle';
const image2 =  require('../static/dust_scratches.png')


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <HeaderStyle>
                <span className="flexText">Flex</span> 
                <span className="boxText">Box</span> 
                {/* <span className="guideText">Guide</span> */}
            </HeaderStyle>
        );
    }
}

export default Header;

const HeaderStyle = styled.div`
    // background-image: url(${image2});
    padding: 30px;
    margin: 0;
    text-align: center;
    font-size: 22pt;
    // margin-top: 20px;
    // margin-bottom: 20px;
    color: #77797a;
    .flexText {
        letter-spacing: .1rem;
        font-family: ${globalStyle.headerFont4};
        margin-right: 10px;
    }
    .boxText {
        background-color: #8c7b74;
        padding: 5px;
        font-family: monospace;
        margin-right: 10px;
        color: #ddd2dd;
    }
    .guideText {
        margin-right: 10px;
        font-family: ${globalStyle.headerFont6}
    }
`