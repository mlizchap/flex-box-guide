import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDirectionChange from './FlexDirectionChange';
import GoTo from './GoTo';
import Display from './Display';

class NavigationSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <NavigationStyle>
                <GoTo {...this.props} />
                <FlexDirectionChange {...this.props}/>
                <Display />
            </NavigationStyle>
        );
    }
}

export default NavigationSection;

const NavigationStyle = styled.div`
    display: flex;
    justify-content: space-around;
    z-index: 100;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    background-color: white;
    border: 1px solid #c6c6c6;
    width: 100%;
    top: 0px;
    padding: 70px;
    padding: 15px 0;
    &:before {
        background-color: green;
        height: 100px;
    }
`