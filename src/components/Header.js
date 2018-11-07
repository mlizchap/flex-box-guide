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
                <span className="flexText">Flex</span> 
                <span className="boxText">box</span> 
                {/* <span className="guideText">Guide</span> */}
            </HeaderStyle>
        );
    }
}

export default Header;

const HeaderStyle = styled.div`
    padding: 30px;
    margin: 0;
    text-align: center;
    font-size: 22pt;
    color: ${globalStyle.mainColor};
    width: 100%;

    .flexText {
        letter-spacing: .1rem;
        font-family: ${globalStyle.headerFont4};
        margin-right: 10px;
    }
    .boxText {
        background-color: #e8dcd5;
        border: 1px solid ${globalStyle.mainColor};;
        padding: 5px;
        font-family: monospace;
        margin-right: 10px;
        color: ${globalStyle.mainColor};
    }
    .guideText {
        font-family: ${globalStyle.headerFont6}
    }
`