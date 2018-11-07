import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDisplayItem from './FlexDisplayItem';
import resizable from '../resizable';
import { globalStyle } from '../../globalStyle';

class FlexDisplayContainer extends Component {
    render() {
        return (
            <React.Fragment>
            <HorizantalAxis>
                <div class="horizantalAxisContent">
                    X AXIS
                </div>
            </HorizantalAxis>

            <ItemContainerStyle {...this.props}>
                <VerticalAxis>
                    <div class="verticalAxisContent">
                        X AXIS
                    </div>
                </VerticalAxis>

                <Items {...this.props}>
                    {this.props.flexBoxDataItems.map(item => {
                        return (
                            <FlexDisplayItem 
                                key={item} 
                                flexGrow={this.props.flexGrow[`${item}`]} 
                                flexShrink={this.props.flexShrink[`${item}`]}
                                flexBasis={this.props.flexBasis[`${item}`]}
                                alignSelf={this.props.alignSelf[`${item}`]}
                                order={this.props.order[`${item}`]}
                                letter={item} 
                                bgColor={globalStyle.childPropColors[`${item}`]}
                            />
                        )
                    })}
                </Items>
            </ItemContainerStyle>
            
            </React.Fragment>
        );
    }
}

export default resizable(FlexDisplayContainer);

const ItemContainerStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: ${globalStyle.bgColorLight};
`
const Items = styled.div`
    background-color: yellow;
    display: flex;
    width: 100%;
    flex-direction: ${props => props.flexDirection};
`

const HorizantalAxis = styled.div`
    width: 100%;
    .horizantalAxisContent {
        background-color: purple;
    }
`

const VerticalAxis = styled.div`
    background-color: green;
    display: flex;
    flex-direction: row;
    width: 50px;
    flex-grow: content;
    height: 100%;
    .verticalAxisContent {
        background-color: blue;
    }
`