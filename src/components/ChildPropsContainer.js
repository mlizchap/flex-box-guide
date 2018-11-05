import React, { Component } from 'react';   

import ChildPropsDropDown from './ChildPropsDropDown';
import { globalStyle } from '../globalStyle';

class ChildPropsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexGrow: {
                a: 1,
                b: 1, 
                c: 1
            }
        };
    }
    updateFlexGrow = (letter, number) => {
        console.log(letter, number)
    }
    render() {
        return (
            <div>
                <ChildPropsDropDown letter="a" handleSelectNumber={this.updateFlexGrow} bgColor={globalStyle.highlighta} />
            </div>
        );
    }
}

export default ChildPropsContainer;