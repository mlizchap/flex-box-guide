import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDisplayItem from './FlexDisplayItem';
import resizable from '../resizable';
import { globalStyle } from '../../globalStyle';

class FlexDisplayContainer extends Component {
    render() {
        return (
            <FlexDisplayContainerStyle {...this.props}>
                {this.props.flexBoxDataItems.map(item => {
                    return (
                        <FlexDisplayItem 
                            key={item} 
                            flexGrow={this.props.flexGrow[`${item}`]} 
                            flexShrink={this.props.flexShrink[`${item}`]}
                            flexBasis={this.props.flexBasis[`${item}`]}
                            alignSelf={this.props.alignSelf[`${item}`]}
                            letter={item} 
                            bgColor={globalStyle.childPropColors[`${item}`]}
                        />
                    )
                })}
            </FlexDisplayContainerStyle>
        );
    }
}

export default resizable(FlexDisplayContainer);

const FlexDisplayContainerStyle = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    width: 100%;
    height: 100%;
    overflow: scroll;
`