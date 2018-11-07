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
                <ItemStyle {...this.props}>
                    {this.props.display}
                </ItemStyle>
            </div>
        );
    }
}

export default FlexDisplayItem;

const ItemStyle = styled.div`
    height: ${props => props.height}px;
    line-height: ${props => props.height}px;
    border-radius: 2px;
    padding-right: 50px;
    padding-left: 50px;
    font-size: 14pt;
    text-align: center;
    margin: 5px;
    background-color: ${globalStyle.parentPropColors.a}
    color: ${globalStyle.mainColor}
    font-family: ${globalStyle.titleFont}
`