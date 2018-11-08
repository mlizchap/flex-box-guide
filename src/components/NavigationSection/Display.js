import React, { Component } from 'react';
import styled from 'styled-components';

import {globalStyle} from '../../globalStyle'
import DropDownMenu from '../DropDownMenu';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <DisplayStyle>
                <DropDownMenu 
                    width={140}
                    fontSize="10pt"
                    padding="5px"
                    font={globalStyle.titleFont}
                    buttonColor={globalStyle.childPropColors.c}
                    buttonFontColor={globalStyle.childPropColors.main}
                />
            </DisplayStyle>
        );
    }
}

export default Display;

const DisplayStyle = styled.div`
    align-self: center;
`