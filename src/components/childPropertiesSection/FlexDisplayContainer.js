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
    padding: 20px;
    // background-color: orange;
    //height: 100%;
`