import React, { Component } from 'react';   

import ChildPropsDropDown from './ChildPropsDropDown';
import { globalStyle } from '../globalStyle';
import ChildPropsItemContainer from './ChildPropsItemContainer';
import { flexBoxData } from '../static/flexBoxData';

class ChildPropsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexGrow: { a: 1, b: 1, c: 1},
            flexShrink: { a: 1, b: 1, c: 1},
        };
    }
    updateNumberSelection = (numberSelected, currentProperty, letter) => {
        //console.log("SHR", this.state.flexShrink)
            this.setState(
                { [currentProperty]: {...this.state[`${currentProperty}`], [`${letter}`]: Number(numberSelected)} },
                () => console.log(this.state.flexShrink)
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
                                        handleNumberSelection = {this.updateNumberSelection} 
                                        bgColor={globalStyle.childPropColors[`${item}`]} 
                                    />
                                )
                            })}
                            <ChildPropsItemContainer 
                                {...this.props}
                                flexBoxDataItems={childProp.items} 
                                flexShrink={this.state.flexShrink}
                                flexGrow={this.state.flexGrow}
                                //flexGrow={(childProp.title === "flex-grow") ? this.state.flexGrow : { a: 1, b: 2, c: 1}} 
                                

                                />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ChildPropsContainer;