import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../globalStyle';


class FlexDisplayItem extends Component {
    render() {
        return (            
            <Item {...this.props}>
                <div>{this.props.textDisplay}</div>
            </Item>
        );
    }
}

export default FlexDisplayItem;

const Item = styled.div`
    // FLEX PROPERTIES
    flex-grow: ${props => props.childFlexProperties.flexGrow};
    flex-shrink: ${props => props.childFlexProperties.flexShrink};
    flex-basis: ${props => props.childFlexProperties.flexBasis};
    align-self: ${props => props.childFlexProperties.alignSelf};
    order: ${props => props.childFlexProperties.order};

    background-color: ${props => props.bgColor};
    color: ${globalStyle.mainColor};
    font-family: ${globalStyle.titleFont};

    border-radius: 2px;
    padding: 0 50px;
    font-size: 14pt;
    text-align: center;
    margin: 5px;
    height: ${props => props.height}px;
    line-height: ${props => props.height}px;
    width: 30px;
`