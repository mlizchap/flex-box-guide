import React, { Component } from 'react';   

import ChildPropsDropDown from './ChildPropsDropDown';
import { globalStyle } from '../globalStyle';
import ChildPropsItemContainer from './ChildPropsItemContainer';
import { flexBoxData } from '../static/flexBoxData';

const items = ["a", "b", "c"]

class ChildPropsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentProp: "",
            flexGrow: { a: 1, b: 1, c: 1},
            flexShrink: { a: 1, b: 1, c: 1},
            flexBasis: {a: '10%', b: 'auto', c: '40%'}
        };
    }
    updateNumberSelection = (numberSelected, currentProperty, letter) => {
        console.log(currentProperty)
            this.setState(
                { [currentProperty]: {...this.state[`${currentProperty}`], [`${letter}`]: Number(numberSelected)} },
                () => console.log(this.state)
            )
    }
    render() {
        return (
            <div style={{marginBottom: '200px'}}>
                {items.map(item => {
                    return (
                        <ChildPropsDropDown 
                            key={item} 
                            letter={item} 
                            // setCurrent={() => this.setState({ currentProp: childProp.camelCaseTitle})}
                            handleNumberSelection = {this.updateNumberSelection} 
                            bgColor={globalStyle.childPropColors[`${item}`]} 
                        />
                    )
                })}
                <ChildPropsItemContainer 
                    flexBoxDataItems={items} 
                    flexShrink={this.state.flexShrink}
                    flexGrow={this.state.flexGrow}
                    flexBasis={this.state.flexBasis}
                    {...this.props}
                />
            </div>
        )
    }
    // render() {
    //     return (
    //         <div style={{marginBottom: '200px'}}>
    //             {flexBoxData.childrenProperties.map(childProp => {
    //                 return (
    //                     <div key={childProp.title}>
    //                         <h3>{childProp.title}</h3>
    //                         {childProp.items.map(item => {
    //                             return (
    //                                 <ChildPropsDropDown 
    //                                     key={item} 
    //                                     letter={item} 
    //                                     setCurrent={() => this.setState({ currentProp: childProp.camelCaseTitle})}
    //                                     handleNumberSelection = {this.updateNumberSelection} 
    //                                     bgColor={globalStyle.childPropColors[`${item}`]} 
    //                                 />
    //                             )
    //                         })}
    //                         <ChildPropsItemContainer 
    //                             flexBoxDataItems={childProp.items} 
    //                             flexShrink={this.state.flexShrink}
    //                             flexGrow={this.state.flexGrow}
    //                             {...this.props}

    //                             />
    //                     </div>
    //                 )
    //             })}
    //         </div>
    //     );
    // }
}

export default ChildPropsContainer;