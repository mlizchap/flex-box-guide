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
    flex-grow: ${props => props.childFlexProperties.flexGrow[`${props.item}`]};
    flex-shrink: ${props => props.childFlexProperties.flexShrink[`${props.item}`]};
    flex-basis: ${props => props.childFlexProperties.flexBasis[`${props.item}`]};
    align-self: ${props => props.childFlexProperties.alignSelf[`${props.item}`]};
    order: ${props => props.childFlexProperties.order[`${props.item}`]};

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