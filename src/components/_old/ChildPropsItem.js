import React, { Component } from 'react';
import styled from 'styled-components';


class ChildPropsItem extends Component {
    render() {
        return (
            <Item {...this.props}>
                <div>{this.props.letter}</div>
            </Item>
        );
    }
}

export default ChildPropsItem;

const Item = styled.div`
    flex-grow: ${props => props.flexGrow};
    flex-shrink: ${props => props.flexShrink};
    flex-basis: ${props => props.flexBasis};
    background-color: ${props => props.bgColor};
    width: 50px;
    height: 50px;
`