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
    updateFlexGrow = (currentLetter, selectedNumber) => {
        let currentProp = this.state.currentProp
        this.setState(
            { [currentProp]: {...this.state[`${currentProp}`], [currentLetter]: selectedNumber}},
            () => console.log(this.state)
        )
    }
    render() {
        return (
            <div style={{marginBottom: '200px'}}>
                {flexBoxData.childrenProperties.map(childProp => {
                    return (
                        <div key={childProp.title}>
                            <h3>{childProp.title}</h3>
                            {childProp.items.map(item => {
                                return (
                                    <ChildPropsDropDown 
                                        key={item} 
                                        letter={item} 
                                        setCurrent={() => this.setState({ currentProp: childProp.camelCaseTitle})}
                                        handleSelectNumber = {this.updateFlexGrow} 
                                        bgColor={globalStyle.childPropColors[`${item}`]} 
                                    />
                                )
                            })}
                            <ChildPropsItemContainer 
                                {...this.props}
                                flexDirection="column"
                                flexBoxDataItems={childProp.items} 
                                flexGrow={(childProp.title === "flex-grow") ? this.state.flexGrow : { a: 1, b: 1, c: 1}} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ChildPropsContainer;