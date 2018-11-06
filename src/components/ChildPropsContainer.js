import React, { Component } from 'react';   

import ChildPropsDropDown from './ChildPropsDropDown';
import { globalStyle } from '../globalStyle';
import ChildPropsItemContainer from './ChildPropsItemContainer';

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
    updateFlexGrow = (currentLetter, selectedNumber) => {
        this.setState({ flexGrow: {...this.state.flexGrow, [currentLetter]: selectedNumber}})
    }
    render() {
        return (
            <div>
                <h3>flex-grow</h3>
                <div>
                    <ChildPropsDropDown flexGrow={this.state.flexGrow} letter="a" handleSelectNumber={this.updateFlexGrow} bgColor={globalStyle.highlighta} />
                    <ChildPropsDropDown flexGrow={this.state.flexGrow}  letter="b" handleSelectNumber={this.updateFlexGrow} bgColor={globalStyle.highlightb} />
                    <ChildPropsDropDown flexGrow={this.state.flexGrow}  letter="c" handleSelectNumber={this.updateFlexGrow} bgColor={globalStyle.highlightc} />            
                </div>
                <ChildPropsItemContainer flexGrow={this.state.flexGrow} />
            </div>
        );
    }
}

export default ChildPropsContainer;