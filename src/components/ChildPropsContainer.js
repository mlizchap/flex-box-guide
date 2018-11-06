import React, { Component } from 'react';   

import ChildPropsDropDown from './ChildPropsDropDown';
import { globalStyle } from '../globalStyle';
import ChildPropsItemContainer from './ChildPropsItemContainer';
import { flexBoxData } from '../static/flexBoxData';

class ChildPropsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentProp: "",
            flexGrow: { a: 1, b: 1, c: 1},
            flexShrink: { a: 1, b: 1, c: 1},
        };
    }
    updateNumberChange = (currentLetter, selectedNumber) => {
        let currentProp = this.state.currentProp
        this.setState(
            { [currentProp]: {...this.state[`${currentProp}`], [currentLetter]: Number(selectedNumber)}},
            () => console.log(this.state)
        )
    }
    render() {
        return (
            <div style={{marginBottom: '200px'}}>
                {flexBoxData.childrenProperties.map(childProp => {
                    { (childProp.title === "flex-shrink") ? console.log("yes") : console.log("no") }
                    return (
                        <div key={childProp.title}>
                            <h3>{childProp.title}</h3>
                            {childProp.items.map(item => {
                                return (
                                    <ChildPropsDropDown 
                                        key={item} 
                                        //flexGrow={this.state.flexGrow} 
                                        //flexShrink={this.state.flexShrink}
                                        letter={item} 
                                        setCurrent={() => this.setState({ currentProp: childProp.camelCaseTitle})}
                                        handleSelectNumber = {this.updateNumberChange} 
                                        bgColor={globalStyle.childPropColors[`${item}`]} 
                                    />
                                )
                            })}
                            <ChildPropsItemContainer 
                                flexBoxDataItems={childProp.items} 
                                flexShrink={(childProp.title === "flex-shrink") ? this.state.flexShrink : { a: 1, b: 1, c: 1 }} 
                                flexGrow={(childProp.title === "flex-grow") ? this.state.flexGrow : { a: 1, b: 1, c: 1}} 
                            />
                                
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ChildPropsContainer;