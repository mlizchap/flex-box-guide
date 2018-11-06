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
    updateFlexGrow = (currentLetter, selectedNumber) => {
        this.setState({ flexGrow: {...this.state.flexGrow, [currentLetter]: selectedNumber}})
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
                                        flexGrow={this.state.flexGrow} 
                                        letter={item} 
                                        handleSelectNumber={this.updateFlexGrow} 
                                        bgColor={globalStyle.childPropColors[`${item}`]} 
                                    />
                                )
                            })}
                            <ChildPropsItemContainer flexBoxDataItems={childProp.items} flexGrow={this.state.flexGrow} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ChildPropsContainer;