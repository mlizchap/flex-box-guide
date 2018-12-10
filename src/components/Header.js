import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../globalStyle';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <HeaderStyle>
                <h1>flex box guide</h1>
                {/* <span className="flexText">Flex</span> 
                <span className="boxText">box</span>  */}
            </HeaderStyle>
        );
    }
}

export default Header;

const HeaderStyle = styled.div`
    padding: 15px 0;
    margin: 0;
    text-align: center;
    font-size: 22pt;
    color: ${globalStyle.mainColor};
    background-color: ${globalStyle.bgColorDark};
    color: #ffdbdb;
    letter-spacing: .3rem;
    width: 100%;
    h1 {
        font-family: ${globalStyle.titleFont};
        font-size: 22pt;
    }
    // .flexText {
    //     letter-spacing: .1rem;
    //     font-family: ${globalStyle.headerFont4};
    //     margin-right: 10px;
    // }
    // .boxText {
    //     background-color: #e8dcd5;
    //     border: 1px solid ${globalStyle.mainColor};;
    //     padding: 5px;
    //     font-family: monospace;
    //     margin-right: 10px;
    //     color: ${globalStyle.mainColor};
    // }
    // .guideText {
    //     font-family: ${globalStyle.headerFont6}
    // }
`