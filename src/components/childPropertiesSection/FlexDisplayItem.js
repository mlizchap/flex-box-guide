import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../../globalStyle';


class FlexDisplayItem extends Component {
    render() {
        return (
            // <div>
                <Item {...this.props}>
                    <div>{this.props.letter}</div>
                </Item>
            // </div>
        );
    }
}

export default FlexDisplayItem;

const Item = styled.div`
    // FLEX PROPERTIES
    flex-grow: ${props => props.flexGrow};
    flex-shrink: ${props => props.flexShrink};
    flex-basis: ${props => props.flexBasis};
    align-self: ${props => props.alignSelf};
    order: ${props => props.order};

    background-color: ${props => props.bgColor};
    color: ${globalStyle.mainColor};
    font-family: ${globalStyle.titleFont};

    border-radius: 2px;
    border-radius: 2px;
    padding-right: 50px;
    padding-left: 50px;
    font-size: 14pt;
    text-align: center;
    margin: 5px;
    height: 30px;
    width: 30px;
`