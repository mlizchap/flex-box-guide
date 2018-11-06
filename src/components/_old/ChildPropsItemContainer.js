import React, { Component } from 'react';
import styled from 'styled-components';

import ChildPropsItem from './ChildPropsItem';
import resizable from './resizable';
import { globalStyle } from '../globalStyle';
import { flexBoxData } from '../static/flexBoxData';

class ChildPropsItemContainer extends Component {
    render() {
        return (
            <ChildPropsItemContainerStyle {...this.props}>
                {this.props.flexBoxDataItems.map(item => {
                    return (
                        <ChildPropsItem 
                            key={item} 
                            flexGrow={this.props.flexGrow[`${item}`]} 
                            flexShrink={this.props.flexShrink[`${item}`]}
                            flexBasis={this.props.flexBasis[`${item}`]}
                            letter={item} 
                            bgColor={globalStyle.childPropColors[`${item}`]}
                        />
                    )
                })}
            </ChildPropsItemContainerStyle>
        );
    }
}

export default resizable(ChildPropsItemContainer);

const ChildPropsItemContainerStyle = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection}
    width: 100%;
    height: 100%;
`