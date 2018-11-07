import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDisplayItem from './FlexDisplayItem';
import resizable from '../resizable';
import { globalStyle } from '../../globalStyle';

class FlexDisplayContainer extends Component {
    render() {
        return (
            <React.Fragment>
            <YAxis>
                <div class="yAxisContent">
                    Y AXIS
                </div>
            </YAxis>

            <ItemContainerStyle {...this.props}>
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
            </ItemContainerStyle>
            </React.Fragment>
        );
    }
}

export default resizable(FlexDisplayContainer);

const ItemContainerStyle = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: ${globalStyle.bgColorLight};

`

const YAxis = styled.div`
    width: 100%;

    .yAxisContent {
        background-color: purple;
    }
`