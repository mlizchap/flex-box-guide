import React, { Component } from 'react';
import styled from 'styled-components';


class ChildPropsItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexGrowA: 1,
            flexGrowB: 1,
            flexGrowC: 1
         };
    }
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
    background-color: ${props => props.bgColor};
    min-width: 50px;
`