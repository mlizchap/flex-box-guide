import React, { Component } from 'react';   

import ChildPropsDropDown from './ChildPropsDropDown';
import { globalStyle } from '../globalStyle';
import ChildPropsItemContainer from './ChildPropsItemContainer';
import { flexBoxData } from '../static/flexBoxData';
import ChildPropItemInfoDisplay from './ChildPropItemInfoDisplay';

const items = ["a", "b", "c"]

class ChildPropsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentProp: "",
            flexGrow: { a: 1, b: 1, c: 1},
            flexShrink: { a: 1, b: 1, c: 1},
            flexBasis: {a: 'auto', b: 'auto', c: 'auto'}
        };
    }
    updateNewValue = (selectedValue, title, letter) => {
        this.setState(
            { [title]: {...this.state[`${title}`], [letter]: (title === "flexBasis" ? selectedValue : parseInt(selectedValue))}}, 
            () => console.log(this.state)
        )
    }
    render() {
        return (
            <div style={{marginBottom: '200px'}}>
                <ChildPropItemInfoDisplay handleSelect={this.updateNewValue}/>
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
}

export default ChildPropsContainer;