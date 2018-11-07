import React, { Component } from 'react';
import {globalStyle} from '../../globalStyle';
import styled from 'styled-components';


class FlexDisplayItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <ItemStyle>
                    a
                </ItemStyle>
            </div>
        );
    }
}

export default FlexDisplayItem;

const ItemStyle = styled.div`
    height: 40px;
    line-height: 40px;
    border-radius: 2px;
    padding-right: 50px;
    padding-left: 50px;
    font-size: 14pt;
    text-align: center;
    background-color: ${globalStyle.parentPropColors.a}
    // color: ${globalStyle.mainColor}
    color: white;
    font-family: ${globalStyle.titleFont}
`